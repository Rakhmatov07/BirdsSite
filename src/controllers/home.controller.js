const home = async(req, res) => {
    res.render("index");
}

const aboutPage= async(req, res) => {
    res.render("about");
}

const birdsPage = async(req, res) => {
    res.render("birds");
}

const contactPage = async(req, res) => {
    res.render("contact");
}

const testimonialPage = async(req, res) => {
    res.render("testimonial");
}

module.exports = {
    home,
    aboutPage,
    birdsPage,
    contactPage,
    testimonialPage
}