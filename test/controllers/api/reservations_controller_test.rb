require 'test_helper'

class Api::ReservationsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_reservations_new_url
    assert_response :success
  end

  test "should get index" do
    get api_reservations_index_url
    assert_response :success
  end

  test "should get create" do
    get api_reservations_create_url
    assert_response :success
  end

  test "should get update" do
    get api_reservations_update_url
    assert_response :success
  end

  test "should get edit" do
    get api_reservations_edit_url
    assert_response :success
  end

  test "should get show" do
    get api_reservations_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_reservations_destroy_url
    assert_response :success
  end

end
