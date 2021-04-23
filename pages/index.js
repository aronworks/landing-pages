import Head from "next/head";

export const config = { amp: true };

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <div className="container">
          <div className="logo-wrap">
            <amp-img
              width="200"
              height="40"
              src="/assets/images/aw-logo.svg"
              alt="AronWorks Logo"
              layout="responsive"
            />
          </div>
          {/* <h1>Increase your Digital Presence with us</h1> */}
          <h1>Sell online with Shopify</h1>
          <h2>Trusted by over 1,000,000 businesses worldwide</h2>
          <form
            className="hero-form"
            method="post"
            action-xhr="/api/hello"
            target="_top"
            custom-validation-reporting="show-first-on-submit"
          >
            <input
              type="text"
              id="show-first-on-submit-name"
              name="name"
              placeholder="Enter your full name"
              required
              pattern="\p{L}+\s\p{L}+"
            />
            <span
              visible-when-invalid="valueMissing"
              validation-for="show-first-on-submit-name"
            ></span>
            <span
              visible-when-invalid="patternMismatch"
              validation-for="show-first-on-submit-name"
            >
              Please enter your first and last name separated by a space (e.g.
              Jane Miller)
            </span>
            <input
              type="email"
              id="show-first-on-submit-email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <span
              visible-when-invalid="valueMissing"
              validation-for="show-first-on-submit-email"
            ></span>
            <span
              visible-when-invalid="typeMismatch"
              validation-for="show-first-on-submit-email"
            ></span>
            <input type="submit" value="Subscribe" className="btn" />
            {/* <div submit-success>
              <template type="amp-mustache">
                Success! Thanks ______ for trying the <code>amp-form</code>{" "}
                demo! Try to insert the word "error" as a name input in the form
                to see how <code>amp-form</code> handles errors.
              </template>
            </div>
            <div submit-error>
              <template type="amp-mustache">
                Error! Thanks _________ for trying the <code>amp-form</code>{" "}
                demo with an error response.
              </template>
            </div> */}
          </form>
          <div className="hero-img-wrap ">
            <amp-img
              width="865"
              height="466"
              src="https://cdn.shopify.com/shopifycloud/brochure/assets/landers/short-lander/free-trial/default@tablet-83f017c08356e1b69d531716b99faa0ff7ff6cee61097d7f5169a55032d79e73.png"
              alt="Hero Image"
              layout="responsive"
            />
          </div>
        </div>
      </section>

      <section className="container section-space">
        <div className="flex justify-space-between px-32 md-px-0">
          <div className="flex-item-three">
            <svg height={70} viewBox="0 0 512 512" width={70}>
              <path d="M201.058 120.775v-11.999a7.5 7.5 0 00-15 0v11.999a7.5 7.5 0 0015 0zM325.943 120.775v-11.999a7.5 7.5 0 00-15 0v11.999a7.5 7.5 0 0015 0zM256.001 135.418a29.332 29.332 0 0022.116-10.072 7.5 7.5 0 00-11.308-9.856c-2.729 3.132-6.669 4.928-10.809 4.928s-8.08-1.796-10.809-4.928a7.501 7.501 0 00-11.309 9.856 29.34 29.34 0 0022.119 10.072z" />
              <path d="M414.1 297.79c-10.725-29.215-38.841-48.843-69.963-48.843h-22.415c4.036-22.919 12.701-35.427 21.823-48.581 13.092-18.877 26.629-38.397 26.629-86.19C370.175 51.219 318.957 0 256.001 0c-20.417 0-40.462 5.463-57.968 15.8a7.5 7.5 0 007.626 12.916C220.857 19.743 238.264 15 256.001 15c54.685 0 99.175 44.49 99.175 99.175 0 43.1-11.636 59.878-23.955 77.642-10.013 14.438-20.342 29.332-24.71 57.129H205.49c-4.368-27.797-14.697-42.691-24.71-57.129-12.319-17.764-23.955-34.542-23.955-77.642 0-25.339 9.558-49.459 26.913-67.917a7.501 7.501 0 00-10.928-10.276c-19.981 21.25-30.985 49.02-30.985 78.192 0 47.792 13.538 67.313 26.629 86.19 9.123 13.154 17.788 25.662 21.824 48.581h-22.415c-31.122 0-59.237 19.628-69.963 48.844-8.521 23.212 8.693 47.864 33.416 47.864h4.02c-4.16 12.678-6.272 25.887-6.272 39.409 0 69.993 56.944 126.937 126.937 126.937 28.942 0 56.221-9.531 78.89-27.562a7.502 7.502 0 001.201-10.539 7.502 7.502 0 00-10.539-1.201C305.566 488.597 281.515 497 256.001 497c-61.722 0-111.937-50.215-111.937-111.937 0-13.593 2.409-26.827 7.165-39.409h47.009a69.92 69.92 0 00-12.179 39.41c0 38.566 31.376 69.942 69.942 69.942s69.942-31.376 69.942-69.942a69.912 69.912 0 00-12.179-39.41h47.009c4.756 12.582 7.165 25.816 7.165 39.409 0 24.58-7.856 47.926-22.719 67.516a7.5 7.5 0 0011.949 9.067c16.859-22.22 25.77-48.701 25.77-76.583 0-13.522-2.113-26.731-6.272-39.409h4.02c24.724 0 41.934-24.657 33.414-47.864M256.001 440.006c-30.295 0-54.942-24.647-54.942-54.942 0-14.871 6.054-29.08 16.691-39.41h76.502c10.638 10.33 16.691 24.539 16.691 39.41-.001 30.295-24.647 54.942-54.942 54.942zM131.316 330.654c-14.323 0-24.281-14.22-19.334-27.695 8.566-23.335 31.023-39.013 55.881-39.013h176.274c24.858 0 47.315 15.678 55.882 39.013 4.921 13.405-4.943 27.694-19.334 27.694l-249.369.001z" />
            </svg>
            <p className="title">
              Beautiful themes that are responsive and customizable
            </p>
            <p className="desc">
              No design skills needed. You have complete control over the look
              and feel of your website, from its layout, to content and colors
            </p>
          </div>

          <div className="flex-item-three">
            <svg height={70} viewBox="0 0 512 512" width={70}>
              <path d="M201.058 120.775v-11.999a7.5 7.5 0 00-15 0v11.999a7.5 7.5 0 0015 0zM325.943 120.775v-11.999a7.5 7.5 0 00-15 0v11.999a7.5 7.5 0 0015 0zM256.001 135.418a29.332 29.332 0 0022.116-10.072 7.5 7.5 0 00-11.308-9.856c-2.729 3.132-6.669 4.928-10.809 4.928s-8.08-1.796-10.809-4.928a7.501 7.501 0 00-11.309 9.856 29.34 29.34 0 0022.119 10.072z" />
              <path d="M414.1 297.79c-10.725-29.215-38.841-48.843-69.963-48.843h-22.415c4.036-22.919 12.701-35.427 21.823-48.581 13.092-18.877 26.629-38.397 26.629-86.19C370.175 51.219 318.957 0 256.001 0c-20.417 0-40.462 5.463-57.968 15.8a7.5 7.5 0 007.626 12.916C220.857 19.743 238.264 15 256.001 15c54.685 0 99.175 44.49 99.175 99.175 0 43.1-11.636 59.878-23.955 77.642-10.013 14.438-20.342 29.332-24.71 57.129H205.49c-4.368-27.797-14.697-42.691-24.71-57.129-12.319-17.764-23.955-34.542-23.955-77.642 0-25.339 9.558-49.459 26.913-67.917a7.501 7.501 0 00-10.928-10.276c-19.981 21.25-30.985 49.02-30.985 78.192 0 47.792 13.538 67.313 26.629 86.19 9.123 13.154 17.788 25.662 21.824 48.581h-22.415c-31.122 0-59.237 19.628-69.963 48.844-8.521 23.212 8.693 47.864 33.416 47.864h4.02c-4.16 12.678-6.272 25.887-6.272 39.409 0 69.993 56.944 126.937 126.937 126.937 28.942 0 56.221-9.531 78.89-27.562a7.502 7.502 0 001.201-10.539 7.502 7.502 0 00-10.539-1.201C305.566 488.597 281.515 497 256.001 497c-61.722 0-111.937-50.215-111.937-111.937 0-13.593 2.409-26.827 7.165-39.409h47.009a69.92 69.92 0 00-12.179 39.41c0 38.566 31.376 69.942 69.942 69.942s69.942-31.376 69.942-69.942a69.912 69.912 0 00-12.179-39.41h47.009c4.756 12.582 7.165 25.816 7.165 39.409 0 24.58-7.856 47.926-22.719 67.516a7.5 7.5 0 0011.949 9.067c16.859-22.22 25.77-48.701 25.77-76.583 0-13.522-2.113-26.731-6.272-39.409h4.02c24.724 0 41.934-24.657 33.414-47.864M256.001 440.006c-30.295 0-54.942-24.647-54.942-54.942 0-14.871 6.054-29.08 16.691-39.41h76.502c10.638 10.33 16.691 24.539 16.691 39.41-.001 30.295-24.647 54.942-54.942 54.942zM131.316 330.654c-14.323 0-24.281-14.22-19.334-27.695 8.566-23.335 31.023-39.013 55.881-39.013h176.274c24.858 0 47.315 15.678 55.882 39.013 4.921 13.405-4.943 27.694-19.334 27.694l-249.369.001z" />
            </svg>
            <p className="title">Pricing as low as $29/month</p>
            <p className="desc">
              Whether you sell online, on social media, in store, or out of the
              trunk of your car, Shopify has you covered. Start selling anywhere
              for just $29/month.
            </p>
          </div>

          <div className="flex-item-three">
            <svg height={70} viewBox="0 0 512 512" width={70}>
              <path d="M201.058 120.775v-11.999a7.5 7.5 0 00-15 0v11.999a7.5 7.5 0 0015 0zM325.943 120.775v-11.999a7.5 7.5 0 00-15 0v11.999a7.5 7.5 0 0015 0zM256.001 135.418a29.332 29.332 0 0022.116-10.072 7.5 7.5 0 00-11.308-9.856c-2.729 3.132-6.669 4.928-10.809 4.928s-8.08-1.796-10.809-4.928a7.501 7.501 0 00-11.309 9.856 29.34 29.34 0 0022.119 10.072z" />
              <path d="M414.1 297.79c-10.725-29.215-38.841-48.843-69.963-48.843h-22.415c4.036-22.919 12.701-35.427 21.823-48.581 13.092-18.877 26.629-38.397 26.629-86.19C370.175 51.219 318.957 0 256.001 0c-20.417 0-40.462 5.463-57.968 15.8a7.5 7.5 0 007.626 12.916C220.857 19.743 238.264 15 256.001 15c54.685 0 99.175 44.49 99.175 99.175 0 43.1-11.636 59.878-23.955 77.642-10.013 14.438-20.342 29.332-24.71 57.129H205.49c-4.368-27.797-14.697-42.691-24.71-57.129-12.319-17.764-23.955-34.542-23.955-77.642 0-25.339 9.558-49.459 26.913-67.917a7.501 7.501 0 00-10.928-10.276c-19.981 21.25-30.985 49.02-30.985 78.192 0 47.792 13.538 67.313 26.629 86.19 9.123 13.154 17.788 25.662 21.824 48.581h-22.415c-31.122 0-59.237 19.628-69.963 48.844-8.521 23.212 8.693 47.864 33.416 47.864h4.02c-4.16 12.678-6.272 25.887-6.272 39.409 0 69.993 56.944 126.937 126.937 126.937 28.942 0 56.221-9.531 78.89-27.562a7.502 7.502 0 001.201-10.539 7.502 7.502 0 00-10.539-1.201C305.566 488.597 281.515 497 256.001 497c-61.722 0-111.937-50.215-111.937-111.937 0-13.593 2.409-26.827 7.165-39.409h47.009a69.92 69.92 0 00-12.179 39.41c0 38.566 31.376 69.942 69.942 69.942s69.942-31.376 69.942-69.942a69.912 69.912 0 00-12.179-39.41h47.009c4.756 12.582 7.165 25.816 7.165 39.409 0 24.58-7.856 47.926-22.719 67.516a7.5 7.5 0 0011.949 9.067c16.859-22.22 25.77-48.701 25.77-76.583 0-13.522-2.113-26.731-6.272-39.409h4.02c24.724 0 41.934-24.657 33.414-47.864M256.001 440.006c-30.295 0-54.942-24.647-54.942-54.942 0-14.871 6.054-29.08 16.691-39.41h76.502c10.638 10.33 16.691 24.539 16.691 39.41-.001 30.295-24.647 54.942-54.942 54.942zM131.316 330.654c-14.323 0-24.281-14.22-19.334-27.695 8.566-23.335 31.023-39.013 55.881-39.013h176.274c24.858 0 47.315 15.678 55.882 39.013 4.921 13.405-4.943 27.694-19.334 27.694l-249.369.001z" />
            </svg>
            <p className="title">
              Trusted by over 1,700,000 businesses worldwide
            </p>
            <p className="desc">
              Shopify handles everything from marketing and payments, to secure
              checkout and shipping
            </p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container tech-wrap flex justify-space-evenly">
          <amp-img
            width="105"
            height="40"
            src="/assets/images/tech1.png"
            alt="Tech1 Image"
            className="tech-logo"
          />
          <amp-img
            width="105"
            height="40"
            src="/assets/images/tech2.png"
            alt="Tech1 Image"
            className="tech-logo"
          />
          <amp-img
            width="105"
            height="40"
            src="/assets/images/tech3.png"
            alt="Tech1 Image"
            className="tech-logo"
          />
          <amp-img
            width="105"
            height="40"
            src="/assets/images/tech4.png"
            alt="Tech1 Image"
            className="tech-logo"
          />
          <amp-img
            width="105"
            height="40"
            src="/assets/images/tech5.png"
            alt="Tech1 Image"
            className="tech-logo"
          />
          <amp-img
            width="105"
            height="40"
            src="/assets/images/tech6.png"
            alt="Tech1 Image"
            className="tech-logo"
          />
          <amp-img
            width="105"
            height="40"
            src="/assets/images/tech7.png"
            alt="Tech1 Image"
            className="tech-logo"
          />
        </div>
      </section>

      <section className="container section-space">
        <div className="cta-wrapper">
          <h3 className="cta-title">Let’s get started!</h3>
          <p className="cta-desc desc">
            Connect with us to discuss your Ideas and Concept. We would be happy
            to take it further!
          </p>

          <button className="btn btn-yellow-orange ">Reach Us</button>
          <p className="desc">It only takes 2 mins!</p>
        </div>
      </section>

      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family: "Lato", sans-serif;
        }

        .container {
          width: 80%;
          max-width: 1008px;
          margin: 0 auto;
        }

        .section-space {
          margin-top: 100px;
        }
        .px-32 {
          padding: 0px 32px;
        }

        .mt-20 {
          margin-top: 40px;
        }

        .flex {
          display: flex;
          flex-wrap: wrap;
        }

        .justify-space-between {
          justify-content: space-between;
        }

        .justify-space-evenly {
          justify-content: space-evenly;
        }

        .align-center {
          align-items: center;
        }

        .logo-wrap {
          width: 200px;
          margin: 0 auto;
        }

        .desc {
          color: #6b7177;
          line-height: 1.5;
          font-size: 1rem;
        }

        .title {
          font-weight: 700;
          font-size: 1.125rem;
          color: #212326;
          line-height: 1.3335;
        }

        h1 {
          font-family: "Lato", sans-serif;
          font-size: 3.75rem;
          margin-bottom: 0.6rem;
          margin-top: 3.113rem;
          font-weight: 900;
          letter-spacing: 1px;
        }
        h2 {
          font-family: "Lato", sans-serif;
          font-size: 1.875rem;
          margin-bottom: 0.6rem;
          margin-top: 1.556rem;
          font-weight: 400;
          letter-spacing: 1px;
          color: rgb(255 255 255 / 70%);
        }
        input {
          margin: 0 8px;
          font-size: 1rem;
          padding: 1rem 1.8125rem;
          border-radius: 4px;
        }
        input[type="email"],
        input[type="text"] {
          color: #212326;
          font-size: 1rem;
          border: none;
          outline: 0;
          background-color: #ffffff;
        }
        input[type="email"]:focus,
        input[type="text"]:focus {
          box-shadow: 0 0 0 0.2rem rgb(0 0 0 / 20%);
        }
        input[type="submit"] {
          margin-left: 4px;
          border: none;
          box-shadow: 0 5px 15px 0 rgb(0 0 0 / 15%);
          background-color: #212326;
          color: #ffffff;
          font-size: 1rem;
          outline: 0;
          font-weight: 700;
          cursor: pointer;
          padding: 0.75rem 1.5625rem;
          letter-spacing: 1px;
          min-width: 175px;
        }
        input[type="submit"]:hover {
          background-color: #000;
        }
        input[type="submit"]:focus {
          box-shadow: 0 0 0 0.2rem rgb(0 0 0 / 20%);
        }
        .hero-form {
          margin-top: 2rem;
        }

        .hero-section {
          background-image: url(/assets/images/bg.svg);
          background-repeat: no-repeat;
          background-position: top center;
          background-size: cover;
          position: relative;
          padding-top: 32px;
          text-align: center;
          color: #fff;
        }
        .hero-img-wrap {
          max-width: 865px;
          margin: 40px auto;
        }

        .flex-item-three {
          width: 30%;
        }

        .tech-wrap {
          padding: 48px 0px;
          border-top: 1px solid #d2d5d9;
          border-bottom: 1px solid #d2d5d9;
        }

        .cta-wrapper {
          text-align: center;
          margin-bottom: 100px;
        }

        .cta-title {
          color: #212326;
          font-size: 2.5rem;
          letter-spacing: -1.2px;
          line-height: 1.3;
          margin-bottom: 1.25rem;
        }
        .cta-desc {
          width: 50%;
          margin: 0 auto;
          font-size: 1.0625rem;
          letter-spacing: -0.2px;
          line-height: 1.71;
          margin-bottom: 2.5rem;
        }

        .btn {
          outline: 0;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid transparent;
          padding: 0.75rem 1.5625rem;
          font-size: 1rem;
          line-height: 1.88;
          border-radius: 8px;
          min-width: 175px;
        }

        .btn-yellow-orange {
          background-color: #fcad38;
          border-color: #fcad38;
        }
        .btn-yellow-orange:focus {
          box-shadow: 0 0 0 0.2rem rgb(219 153 54 / 50%);
        }
        .btn-yellow-orange:hover {
          background-color: #fb9d12;
          border-color: #fb9806;
        }
        .tech-logo {
          margin  15px;
        }
      `}</style>

      <style jsx>
        {`
          @media only screen and (max-width: 1024px) {
            .container {
              width: 90%;
            }
          }
        `}
      </style>

      <style jsx>
        {`
          @media only screen and (max-width: 768px) {
            h1 {
              font-size: 1.8rem;
              margin-top: 2rem;
              letter-spacing: normal;
            }
            h2 {
              font-size: 1.4rem;
              margin-top: 1rem;
            }
            input {
              margin: 0 8px 0 0;
              padding: 0.8rem 1.3rem;
            }
            .hero-img-wrap {
              width: 70%;
            }
            .title {
              font-size: 1rem;
            }
            .md-px-0 {
              padding: 0;
            }
            .tech-wrap {
              margin-top: 40px;
            }
          }
        `}
      </style>

      <style jsx>
        {`
          @media only screen and (max-width: 700px) {
            input {
              margin: 5px auto;
              width: 70%;
            }
            .section-space {
              margin-top: 70px;
            }
          }
        `}
      </style>

      <style jsx>
        {`
          @media only screen and (max-width: 500px) {
            .container {
              width: 90%;
            }
            .section-space {
              margin-top: 50px;
            }
            input {
              margin: 5px auto;
              width: 90%;
            }

            h2 {
              font-size: 1.2rem;
            }

            .logo-wrap {
              width: 150px;
              margin: 0 auto;
            }
            input[type="submit"] {
              margin: 5px 0px;
            }

            .hero-img-wrap {
              width: 95%;
            }

            .flex-item-three {
              width: 100%;
              margin-bottom: 20px;
            }
            .tech-logo {
              margin  15px 7px;
            }

            .cta-title {
              font-size: 2rem;
            }

            .cta-desc {
              width: 80%;
          }
        `}
      </style>
    </>
  );
}
