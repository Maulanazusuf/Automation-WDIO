Feature: Heroku app Login Scenario

    Scenario: Add items to cart
        Given I am on the front page
        When I try to login with username "maulanazz" and password "1234"
        Then I am successfully logged in with username "maulanazz"
        When I add items "Nexus 6" to cart
        When I add items "Sony vaio i5" to cart
        Then I am logout from website


