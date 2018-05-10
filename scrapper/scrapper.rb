require 'nokogiri'
require 'open-uri'
require 'json'

# links = ["https://www.opentable.com/r/seven-hills-san-francisco?page=1", "https://www.opentable.com/r/the-stinking-rose-san-francisco?page=1", "https://www.opentable.com/blue-hill?page=1", "https://www.opentable.com/harold-black?page=1", "https://www.opentable.com/seasons-restaurant-four-seasons-washington-dc?page=1", "https://www.opentable.com/r/tarbells-phoenix?page=1"]
allRestaurants = Nokogiri::HTML(open("https://www.opentable.com/new-york-restaurant-listings"))

links = []

allRestaurants.xpath('//a[starts-with(@class, "rest-row-name rest-name ")]').each do |el|
  links << "https://www.opentable.com" + el.attr("href")
  break if links.length >= 10
end

links.each do |link|
  p "Scraping link: " + link

  doc = Nokogiri::HTML(open(link))
  restaurant = {};
  restaurant_cuisines = [];
  restaurant_payment_options = [];
  restaurant_location = {};
  restaurant_tags = [];
  restaurant_photos = [];
  restaurant_reviews = [];
  restaurant_menu = {};
  restaurant_menu_sections_names = []


  p '-------------------------------------------------------------'

  doc.xpath('//h1[starts-with(@class, "dffa9ef4 _66a2d72e")]').each do |el|
    restaurant["name"] = el.children[0].text
  end

  doc.xpath('//span[starts-with(@itemprop, "priceRange")]').each do |el|
    restaurant["price_range"] = el.text
  end

  doc.xpath('//div[starts-with(@id, "oc-menu")]').each do |el|
    el.xpath('.//a[starts-with(@class, "_4076c644")]').each do |link|
      restaurant_menu["link"] = link.attr('href')
    end
  end

  doc.xpath('//div[starts-with(@class, "_36c26dd6")]').each do |el|
    el.xpath('.//button[starts-with(@class, "menu-link")]').each do |menu_section|
      restaurant_menu_sections_names << menu_section.text
    end
  end

  restaurant_menu["menu_sections"] = []
  (1..restaurant_menu_sections_names.length+1).each do |idx|
    curr_section = {}
    curr_section["title"] = restaurant_menu_sections_names[idx]
    curr_section["mini_sections"] = []
    doc.xpath("//div[starts-with(@id, \"menu-#{idx}\")]").each do |el|
      el.xpath('.//div[starts-with(@class, "menuSection _71cb1f26")]').each do |menu_section|
        curr_section_mini = {}
        curr_section_mini["items"] = []
        menu_section.xpath('.//h3').each do |menu_section_title|
          curr_section_mini["mini_section_title"] = menu_section_title.text
        end
        menu_section.xpath('.//div[starts-with(@class, "menu-item f42dd212")]').each do |dish|
          item = {}
          dish.children.each do |child|
            case child.attr("class")
            when "menu-item-price c9ba0d02"
              item["price"] = child.text
            when "menu-item-title"
              item["title"] = child.text
            end
          end
          curr_section_mini["items"] << item
        end
        curr_section["mini_sections"] << curr_section_mini
      end
    end

    restaurant_menu["menu_sections"] << curr_section
  end

  doc.xpath('//div[starts-with(@itemprop, "description")]').each do |el|
    restaurant["description"] = el.children[0].text
  end

  doc.xpath('//div[starts-with(@class, "_37c5e15e")]').each do |el|
    bgurl = el.attr("style")
    bgurl = bgurl[bgurl.index("maps")..-3]
    restaurant_location["location_image_url"] = bgurl
  end

  doc.xpath('//div[starts-with(@class, "_104e8c71 _335ca853")]').each do |el|
    unless el.nil?
      restaurant["background_image"] = el.attr('style')
    end
  end

  doc.xpath('//div[starts-with(@itemprop, "streetAddress")]').each do |el|
    restaurant_location["address"] = el.children[0].text
  end

  doc.xpath('//div[starts-with(@class, "eda4e1f7")]').each do |el|
    restaurant_tags << el.children[0].text
  end

  doc.xpath('//div[starts-with(@class, "menu-updated b5b6c062")]').each do |el|
    restaurant_menu["last_update"] = el.text
  end

  doc.xpath('//div[starts-with(@itemprop, "review")]').each do |el|
    currReview = {}
    el.children.each do |child|
      case child.attr("class")
      when "_53e0a71b"
        child.xpath('.//span[starts-with(@itemprop, "name")]').each do |name|
          currReview["username"] = name.text
        end
        child.xpath('.//div[starts-with(@class, "_491257d8")]').each do |rating|
          currReview["rating"] = rating.children[0].text.to_i
          currReview["date_created"] = rating.children[1].text
        end
      when "reviewBodyContainer _73484bf6"
        child.xpath('.//p[starts-with(@id, "review-body-original")]').each do |body|
          currReview["body"] = body.text
        end
      end
    end
    restaurant_reviews << currReview
  end

  doc.xpath('//div[starts-with(@class, "photo")]').each do |el|
    unless el.children[0].nil?
        url = el.children[0].attr('src')
        unless url.nil?
          restaurant_photos << url
        end
    end
  end

  doc.xpath('//div[starts-with(@class, "_9c5985ce")]').each do |el|
    if el.children.length == 2
      case el.children[0].text
      when "Dining Style"
        restaurant["dining_style"] = el.children[1].text
      when "Phone number"
        restaurant["phone_number"] = el.children[1].text
      when "Website"
        restaurant["website_link"] = el.children[1].text
      when "Hours of operation"
        restaurant["hours"] = el.children[1].text
      when "Dress code"
        restaurant["dress_code"] = el.children[1].text
      when "Executive chef"
        restaurant["executive_chef"] = el.children[1].text
      when "Private party facilities"
        restaurant["private_party_facilities"] = el.children[1].text
      when "Private party contact"
        restaurant["private_party_contact"] = el.children[1].text
      when "Payment options"
        restaurant_payment_options = el.children[1].text.split(",").map(&:strip)
      when "Cuisines"
        restaurant_cuisines = el.children[1].text.split(",").map(&:strip)
      when "Neighborhood"
        restaurant_location["neighborhood"] = el.children[1].text
      when "Cross street"
        restaurant_location["cross_street"] = el.children[1].text
      when "Parking details"
        restaurant_location["parking_details"] = el.children[1].text
      end
    end
  end

  # Creates a restaurant
  uri = URI.parse("https://justeat.herokuapp.com/api/restaurants")
  http = Net::HTTP.new(uri.host, 80)
  # http.set_debug_output($stdout)
  # http.use_ssl = true
  # http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  request = Net::HTTP::Post.new(uri.request_uri)
  request.add_field('Content-Type', 'application/json')
  request.body = restaurant.to_json
  response = http.request(request)
  unless response.kind_of? Net::HTTPSuccess
    p "failed 1"
    next
  end
  responseObj = JSON.parse(response.body)
  restaurant_id = responseObj["restaurant"]["id"].to_s
  p 'Restaurant was created: id=' + restaurant_id

  # Creates a restaurant's menu
  # uri = URI.parse("https://justeat.herokuapp.com/api/restaurants/#{restaurant_id}/menus")
  # http = Net::HTTP.new(uri.host, 80)
  # # http.set_debug_output($stdout)
  # # http.use_ssl = true
  # # http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  # request = Net::HTTP::Post.new(uri.request_uri)
  # request.add_field('Content-Type', 'application/json')
  # request.body = restaurant_menu.to_json
  # response = http.request(request)
  # unless response.kind_of? Net::HTTPSuccess
  #   p "failed 2"
  #   next
  # end
  # responseObj = JSON.parse(response.body)

  # Creates cuisines
  restaurant_cuisines.each do |cuisine|
    uri = URI.parse("https://justeat.herokuapp.com/api/restaurants/#{restaurant_id}/cuisines")
    http = Net::HTTP.new(uri.host, 80)
    # http.set_debug_output($stdout)
    # http.use_ssl = true
    # http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Post.new(uri.request_uri)
    request.add_field('Content-Type', 'application/json')
    requestCuisine = {}
    requestCuisine["name"] = cuisine
    request.body = requestCuisine.to_json
    response = http.request(request)
    unless response.kind_of? Net::HTTPSuccess
      p "failed 3"
      next
    end
    responseObj = JSON.parse(response.body)
  end

  # Creates payment options
  restaurant_payment_options.each do |payment_option|
    uri = URI.parse("https://justeat.herokuapp.com/api/restaurants/#{restaurant_id}/payment_options")
    http = Net::HTTP.new(uri.host, 80)
    # http.set_debug_output($stdout)
    # http.use_ssl = true
    # http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Post.new(uri.request_uri)
    request.add_field('Content-Type', 'application/json')
    requestPaymentOption = {}
    requestPaymentOption["name"] = payment_option
    request.body = requestPaymentOption.to_json
    response = http.request(request)
    unless response.kind_of? Net::HTTPSuccess
      p "failed 4"
      next
    end
    responseObj = JSON.parse(response.body)
  end


  # Creates locations
  uri = URI.parse("https://justeat.herokuapp.com/api/restaurants/#{restaurant_id}/locations")
  http = Net::HTTP.new(uri.host, 80)
  # http.set_debug_output($stdout)
  # http.use_ssl = true
  # http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  request = Net::HTTP::Post.new(uri.request_uri)
  request.add_field('Content-Type', 'application/json')
  restaurant_location["latitude"] = 0.0
  restaurant_location["longitude"] = 0.0
  restaurant_location["country"] = "Placeholder"
  restaurant_location["city"] = "Placeholder"
  request.body = restaurant_location.to_json
  response = http.request(request)
  unless response.kind_of? Net::HTTPSuccess
    p "failed 5"
    next
  end
  responseObj = JSON.parse(response.body)

  # Creates photos
  restaurant_photos.each do |photo|
    uri = URI.parse("https://justeat.herokuapp.com/api/restaurants/#{restaurant_id}/photos")
    http = Net::HTTP.new(uri.host, 80)
    # http.set_debug_output($stdout)
    # http.use_ssl = true
    # http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Post.new(uri.request_uri)
    request.add_field('Content-Type', 'application/json')
    requestPhoto = {}
    requestPhoto["url"] = photo
    request.body = requestPhoto.to_json
    response = http.request(request)
    unless response.kind_of? Net::HTTPSuccess
      p "failed 6"
      next
    end
    responseObj = JSON.parse(response.body)
  end

  # Creates tags
  restaurant_tags.each do |tag|
    uri = URI.parse("https://justeat.herokuapp.com/api/restaurants/#{restaurant_id}/tags")
    http = Net::HTTP.new(uri.host, 80)
    # http.set_debug_output($stdout)
    # http.use_ssl = true
    # http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Post.new(uri.request_uri)
    request.add_field('Content-Type', 'application/json')
    requestTag = {}
    requestTag["name"] = tag
    request.body = requestTag.to_json
    response = http.request(request)
    unless response.kind_of? Net::HTTPSuccess
      p "failed 7"
      next
    end
    responseObj = JSON.parse(response.body)
  end

  # Creates reviews
  count = 0
  restaurant_reviews.each do |review|
    break if count > 3
    uri = URI.parse("https://justeat.herokuapp.com/api/restaurants/#{restaurant_id}/reviews")
    http = Net::HTTP.new(uri.host, 80)
    # http.set_debug_output($stdout)
    # http.use_ssl = true
    # http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Post.new(uri.request_uri)
    request.add_field('Content-Type', 'application/json')
    request.body = review.to_json
    response = http.request(request)
    unless response.kind_of? Net::HTTPSuccess
      p response.body
      p "failed 8"
      next
    end
    responseObj = JSON.parse(response.body)
    count += 1
  end
end
