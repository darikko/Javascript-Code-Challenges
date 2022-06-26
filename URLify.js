function urlify(blogTitle) {
    const punctutation = /[.,/#!$%^&*;:{}=!\-_`~''"]/g;

    const blogTitleWithoutPunctuation = blogTitle.replace(punctuation, "");
    return blogTitleWithoutPunctuation.toLowerCase().trim().replaceAll(" ", "-");
}

console.log(urlify("How I Got Into Programming!"));
console.log(urlify("Data Structures Interview Prep"));