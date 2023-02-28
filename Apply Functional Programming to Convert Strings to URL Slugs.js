
//----------Apply Functional Programming to Convert Strings to URL Slugs-------
/*
Fill in the urlSlug function so it converts a string title and returns the
hyphenated version for the URL. You can use any of the methods covered in
this section, and don't use replace. Here are the requirements:
 1- The input is a string with spaces and title-cased words
 2- The output is a string with the spaces between words replaced by a hyphen (-)
 3- The output should be all lower-cased letters
 4- The output should not have any spaces
 */

 function urlSlug(title) {
   return title.trim().split(/\s+/).join('-').toLowerCase()
}
console.log(urlSlug("  A Mind Needs Books Like A Sword Needs A Whetstone   "))
console.log(urlSlug("Winter Is  Coming"))
//output >>>  a-mind-needs-books-like-a-sword-needs-a-whetstone
//output >>>  winter-is-coming
    