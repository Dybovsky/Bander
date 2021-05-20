const Footer = () => {
    return(
        <footer className="text-center text-lg-start bg-dark text-light pt-3 mt-3" >
         <section className="">
          <div className="container text-center text-md-start mt-3">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto m-4">
                <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3"></i>Bander</h6>
                <p>
                  Changing the world of artists, live music and world wide entertainment.
                  Sign up now to join the revolution.
                </p>
              </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Find:</h6>
              <p><a href="#!" className="text-reset">Profile</a></p>
              <p><a href="#!" className="text-reset">Create Post</a></p>
              <p><a href="#!" className="text-reset">Search</a></p>
              <p><a href="#!" className="text-reset">Home</a></p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p><a href="#!" className="text-reset">Genres</a></p>
              <p><a href="#!" className="text-reset">Venue Types</a></p>
              <p><a href="#!" className="text-reset">Locations</a></p>
              <p><a href="#!" className="text-reset">Events</a></p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
              <p><i className="fas fa-envelope me-3"></i>info@example.com</p>
              <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
              <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
            </div>
          </div>
        </div>
        </section>
        <div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
        © 2021 Copyright:
        <a className="text-reset fw-bold" href="#!">Team 5 lead by Tal Michel</a>
      </div>
    </footer>
    );
}
export default Footer;