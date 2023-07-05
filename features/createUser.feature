Feature: Create User Flow

    Background:
        Given I am on the admin dashboard

    Scenario: As an admin, I can add new user with valid data
        When I click on the "pengguna" menu item
        And I click on the "tambah" button on the pengguna page
        And I input nama as "<nama>" and email as "<email>" and password as "<password>"
        And I click on the "simpan" button
        Then I should see a success alert

        Examples:
            |   nama                        |   email                               |   password                |
            |   Budi Setiabudi              |   budisetiabudi@gmail.com             |   sayainibudi             |

    Scenario: As an admin, I can't add a new user with empty password
        When I click on the "pengguna" menu item
        And I click on the "tambah" button on the pengguna page
        And I input nama as "<nama>" and email as "<email>" and password as "<password>"
        And I click on the "simpan" button
        Then I should see an error message for the "password" field

        Examples:
            |   nama                        |   email                               |   password                |
            |   Budi Setiabudi              |   budisetiabudi@gmail.com             |                           |