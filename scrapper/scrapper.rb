require 'nokogiri'
require 'open-uri'

links = ["https://www.opentable.com/r/seven-hills-san-francisco?page=1", "https://www.opentable.com/r/the-stinking-rose-san-francisco?page=1", "https://www.opentable.com/blue-hill?page=1", "https://www.opentable.com/harold-black?page=1", "https://www.opentable.com/seasons-restaurant-four-seasons-washington-dc?page=1", "https://www.opentable.com/r/tarbells-phoenix?page=1"]

links.each do |link|
  doc = Nokogiri::HTML(open(link))
  restaurant = {};
  restaurant_cuisines = [];
  restaurant_payment_options = [];
  restaurant_location = {};
  restaurant_tags = [];
  restaurant_photos = [];
  restaurant_reviews = [];
  restaurant_menu = {};
  restaurant_menu_sections = []


  p '-------------------------------------------------------------'

  doc.xpath('//h1[starts-with(@class, "dffa9ef4 _66a2d72e")]').each do |el|
    restaurant["name"] = el.children[0].text
  end

  doc.xpath('//div[starts-with(@id, "oc-menu")]').each do |el|
    el.xpath('.//a[starts-with(@class, "_4076c644")]').each do |link|
      restaurant_menu["link"] = link.attr('href')
    end
  end

  doc.xpath('//div[starts-with(@class, "_36c26dd6")]').each do |el|
    el.xpath('.//button[starts-with(@class, "menu-link")]').each do |menu_section|
      restaurant_menu_sections << menu_section.text
    end
  end

  (1..restaurant_menu_sections.length+1).each do |idx|
    curr_section = {}
    curr_section["title"] = restaurant_menu_sections[idx]
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

    restaurant_menu_sections << curr_section
  end

  #
  # el.xpath('.//div[starts-with(@class, "menu-item-title")]').each do |title|
  #   title = title.text
  #   p title
  # end

  # restaurant_menu["menu_section"] = curr_menu_section

  doc.xpath('//div[starts-with(@itemprop, "description")]').each do |el|
    restaurant["description"] = el.children[0].text
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
          currReview["review_date"] = rating.children[1].text
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

  # p restaurant_menu_sections
  # p restaurant
  # p restaurant_cuisines
  # p restaurant_location
  # p restaurant_tags
  # p restaurant_photos
end
