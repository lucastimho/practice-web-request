require "http"
puts "Welcome to the Dictionary app. Please type in a word."
word = gets.chomp.downcase
response = HTTP.get("https://api.wordnik.com/v4/word.json/#{word}/definitions?limit=1&includeRelated=false&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=64e90a58d89a8e7f3f000001fe809d0cd55d32cb45b9f117e").parse(:json)
pp response
definition = response[0]["text"]
puts "The definition of \"#{word}\" is the following:"
puts definition