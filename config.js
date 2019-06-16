const prod = true
const base_url = (prod) ? "http://nazishfraz.co.nf/danish_portfolio_api_v2/" : "http://localhost/nazish/personal/danish_portfolio_api_v2/"

export default {
    api_url: base_url,
    api_url_work_experience: base_url+"work-experience",
    api_url_projects: base_url+"projects",
    api_url_certifications: base_url+"certifications"
}