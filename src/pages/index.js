import React, { Fragment, useState, useEffect } from "react";
import Banner from "../components/Home/Banner"
import Status from "../components/Home/Status"
import Patner from "../components/Home/Patner"
import Cards from "../components/Home/Cards"
import Coming from "../components/Home/Coming"
import Doctor from "../components/Home/Doctor"
import About from "../components/Home/About"
import Team from "../components/Home/Team"
import Customers from "../components/Home/Customers"
import Clints from "../components/Home/Clints"
import Blogs from "../components/Home/Blogs"
import Contact from "../components/Home/Contact"
import Footer from "../components/Home/Footer"
import Loader from "../components/Home/Loader"

import SEO from "../components/seo"

const IndexPage = () =>
{
  const [ loading, setLoading ] = useState( "" );

  useEffect( () =>
  {
    setLoading( true )
    setTimeout( () =>
    {
      setLoading( false )
    }, 5000 )
  }, [] )
  return (
    <Fragment>
      {
        loading ?
          <Loader/>
          :
          <>
            <SEO title="Home" description="Gatsby is a React-based open source framework with performance, scalability and security built-in." keywords={ [ 'gatsby', 'react' ] } />
            <Banner />
            <Status />
            <Patner />
            <Cards />
            <Coming />
            <Doctor />
            <About />
            <Team />
            <Customers />
            <Clints />
            <Blogs />
            <Contact />
            <Footer />
          </>

      }
    </Fragment>
  )
}

export default IndexPage
