export default function Main() {
  return (
    <div>
      <header>
        <div className="navbar" id="navbar">
          <div className="nav-logo border-logo">
            <div className="logo" />
          </div>
          <div className="nav-address border">
            <p
              style={{
                color: "#cccccc",
                fontSize: "0.85rem",
                marginLeft: 15,
              }}
            >
              Deliver to
            </p>
            <div className="add-icon">
              <i className="fa-solid fa-location-dot" />
              <p style={{ fontSize: "1rem", marginLeft: 5, marginTop: 2 }}>
                India
              </p>
            </div>
          </div>
          <div className="nav-search">
            <select className="search-select">
              <option value="">All</option>
            </select>
            <input placeholder="Search Amazon" className="search-input" />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass" />
            </div>
          </div>
          <div className="nav-signin border">
            <p>
              <span>Hello, sign in</span>
            </p>
            <p className="nav-second">Account &amp; List</p>
          </div>
          <div className="nav-return border">
            <p>
              <span>Return</span>
            </p>
            <p className="nav-second">&amp; Orders</p>
          </div>
          <div className="nav-cart border">
            <i className="fa-solid fa-cart-arrow-down" />
            Cart
          </div>
        </div>
        <div className="panel">
          <div className="panel-all  border">
            <i className="fa-solid fa-bars" />
            All
          </div>
          <div className="panel-option">
            <p className="border">Today's Deals </p>
            <p className="border"> Registry</p>
            <p className="border">Customer Service</p>
            <p className="border">Gift Cards</p>
            <p className="border">Sell</p>
          </div>
          <div className="panel-deals ">Shop deals in Electronics</div>
        </div>
      </header>
      <div className="main-section">
        <div className="main-message">
          You are on amazon.com. You can also shop on Amazon India for millions
          of products with fast local delivery.
          <a href="/"> Click here to go to amazon.in </a>
        </div>
      </div>
      <div className="shop-section">
        <div className="box1 box">
          <div className="box-content">
            <h2>Fashion trends you like</h2>
            <div className="four-box">
              <div
                className="inn-box"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/inn-image1.jpg"
                  })`,
                  backgroundSize: "cover",
                  flex: "auto",
                  marginBottom: 23,
                  marginRight: 15,
                }}
              >
                <p style={{ marginTop: "19vh" }}>
                  <span>Dresses</span>
                </p>
              </div>
              {/* assets/image/inn-image2.jpg */}
              <div
                className="inn-box"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/inn-image2.jpg"
                  })`,
                  backgroundSize: "cover",
                  flex: "auto",
                  marginBottom: 22,
                }}
              >
                <p style={{ marginTop: "19vh" }}>
                  <span>Knits</span>
                </p>
              </div>
              <div
                className="inn-box"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/inn-image3.jpg"
                  })`,
                  backgroundSize: "cover",
                  flex: "auto",
                  marginRight: 15,
                }}
              >
                <p style={{ marginTop: "19vh" }}>
                  <span>Jackets</span>
                </p>
              </div>
              <div
                className="inn-box"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + "/images/inn-image4.jpg"
                  })`,
                  backgroundSize: "cover",
                  flex: "auto",
                }}
              >
                <p style={{ marginTop: "19vh" }}>
                  {" "}
                  <span>Jewelry</span>
                </p>
              </div>
            </div>
            <a href="/" style={{ textDecoration: "none", color: "#007185" }}>
              Explore more
            </a>
          </div>
        </div>
        <div className="box2 box">
          <div className="box-content">
            <h2>Health &amp; Personal Care</h2>
            <div
              className="box-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "images/box2-image.jpg"
                })`,
                backgroundSize: "cover",
              }}
            ></div>
            <a href="/" style={{ textDecoration: "none", color: "#007185" }}>
              See more
            </a>
          </div>
        </div>
        <div className=" box3 box">
          <div className="box-content">
            <h2>Upgrade your furniture</h2>
            <div
              className="box-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/box3_image.jpg"
                })`,
                backgroundSize: "cover",
              }}
            ></div>
            <a href="/" style={{ textDecoration: "none", color: "#007185" }}>
              Shop now
            </a>
          </div>
        </div>
        <div className=" box4 box">
          <div className="box-content">
            <h2>Laptop for every need</h2>
            <div
              className="box-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/box4_image.jpg"
                })`,
                backgroundSize: "cover",
              }}
            ></div>
            <a href="/" style={{ textDecoration: "none", color: "#007185" }}>
              Find your laptop here
            </a>
          </div>
        </div>
        <div className="box5 box">
          <div className="box-content">
            <h2>Beauty Products</h2>
            <div
              className="box-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/box5_image.jpg"
                })`,
                backgroundSize: "cover",
              }}
            ></div>
            <a href="/" style={{ textDecoration: "none", color: "#007185" }}>
              See more
            </a>
          </div>
        </div>
        <div className="box6 box">
          <div className="box-content">
            <h2>Pets Products</h2>
            <div
              className="box-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/box6_image.jpg"
                })`,
                backgroundSize: "cover",
              }}
            ></div>
            <a href="/" style={{ textDecoration: "none", color: "#007185" }}>
              See more
            </a>
          </div>
        </div>
        <div className=" box7 box">
          <div className="box-content">
            <h2>Toys under $25</h2>
            <div
              className="box-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/box7_image.jpg"
                })`,
                backgroundSize: "cover",
              }}
            ></div>
            <a href="/" style={{ textDecoration: "none", color: "#007185" }}>
              Shop now
            </a>
          </div>
        </div>
        <div className=" box8 box">
          <div className="box-content">
            <h2>Shops deals in Fashion</h2>
            <div
              className="box-img"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/box8_image.jpg"
                })`,
                backgroundSize: "cover",
              }}
            ></div>
            <a href="/" style={{ textDecoration: "none", color: "#007185" }}>
              See more
            </a>
          </div>
        </div>
      </div>
      <footer>
        <div className="foot-panel1">
          <a href="#navbar" style={{ textDecoration: "none", color: "white" }}>
            Back to top
          </a>
        </div>
        <div className="foot-panel2">
          <ul>
            <p>Get to Know Us</p>
            <a href="/">Careers</a>
            <a href="/">Blog</a>
            <a href="/">About Amazon</a>
            <a href="/">Investor Relations</a>
            <a href="/">Amazon Devices</a>
            <a href="/">Amazon Science</a>
          </ul>
          <ul>
            <p>Get to Know Us</p>
            <a href="/">Careers</a>
            <a href="/">Blog</a>
            <a href="/">About Amazon</a>
            <a href="/">Investor Relations</a>
            <a href="/">Amazon Devices</a>
            <a href="/">Amazon Science</a>
          </ul>
          <ul>
            <p>Get to Know Us</p>
            <a href="/">Careers</a>
            <a href="/">Blog</a>
            <a href="/">About Amazon</a>
            <a href="/">Investor Relations</a>
            <a href="/">Amazon Devices</a>
            <a href="/">Amazon Science</a>
          </ul>
          <ul>
            <p>Get to Know Us</p>
            <a href="/">Careers</a>
            <a href="/">Blog</a>
            <a href="/">About Amazon</a>
            <a href="/">Investor Relations</a>
            <a href="/">Amazon Devices</a>
            <a href="/">Amazon Science</a>
          </ul>
          <ul>
            <p>Get to Know Us</p>
            <a href="/">Careers</a>
            <a href="/">Blog</a>
            <a href="/">About Amazon</a>
            <a href="/">Investor Relations</a>
            <a href="/">Amazon Devices</a>
            <a href="/">Amazon Science</a>
          </ul>
        </div>
        <div className="foot-panel3">
          <div className="logo" />
        </div>
        <div className="foot-panel4">
          <div className="pages">
            <a href="/">Condition of use</a>
            <a href="/">Privacy Notice</a>
            <a href="/">Your Ads Privacy Choices</a>
          </div>
          <div className="copyright">
            © 1996-2023, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
    </div>
  );
}
