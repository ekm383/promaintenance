import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import Column from "../components/globals/section/Column"
import Intro from "../components/intro"
import { FaArrowCircleRight } from "react-icons/fa"
import Background from "../components/background"
import ServiceColumn from "../components/serviceColumn"
import Gallery from "../components/gallery"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Full Service Agency Offering Production, Design, & Marketing`,
      author: `@1omni"
      keywords={[
        `Apparel Design`,
        `Apparel Marketing`,
        `Full Service Agency`,
        `Apparel Production`,
      ]}
    />
    <HeaderIndex>
      <Section style={{ height: "70vh", width: "100vw", alignItems: "center" }}>
        <Banner
          title="PRO MAINTENANCE"
          subtitle="Trustworthy and Quality Workmanship | Oahu, HI"
        >
          <AniLink fade to="#contact">
            <Button>
              CONTACT US <FaArrowCircleRight />
            </Button>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section id="agency" style={{ width: "100vw" }}>
      <Background>
        <Intro intro="FULL SERVICE JANITORIAL AND MAINTENANCE COMPANY" />
      </Background>
      <Section style={{ padding: "4rem 0rem" }}>
        <Column>
          <ServiceColumn
            service="Janitorial Service"
            description="Commercial property cleaning, including professional offices, educational, medical and industrial business cleaning. "
          />
          <ServiceColumn
            service="Move In and Out Cleaning"
            description=" Apartment Move-out & Move-in Cleaning Service, House Cleaning, Residential Cleaning, Commercial Cleaning"
          />
          <ServiceColumn
            service="Landscape Maintenance"
            description="Keeping a landscape healthy, clean, safe and attractive,"
          />
          <ServiceColumn
            service="Handy Work"
            description="Repair and maintenance around the home or business."
          />
          <ServiceColumn
            service="Carpet Shampoo"
            description="Get rid of stains and smells. We'll renew your carpets life."
          />
          <ServiceColumn
            service="Strip and Wax"
            description="Remove layers of old finishing, damage, and wax. Renew your flooring with a brand new finish."
          />
          <ServiceColumn
            service="Pressure Washing"
            description="Remove loose paint, mold, grime, dust, mud, chewing gum and dirt from surfaces."
          />
        </Column>
        <Column>
          <Gallery />
        </Column>
      </Section>
    </Section>

    <Section
      id="contact"
      style={{
        width: "100vw",
        padding: "2rem 0rem",
        backgroundColor: "#f1f1f1",
        flexDirection: "column",
      }}
    >
      <h3 style={{ fontSize: "4rem", color: "#000000", margin: "2rem auto" }}>
        Let's Talk
      </h3>
      <Contact />
      <p
        style={{
          width: "80vw",
          textAlign: "center",
          margin: "0rem auto",
          color: "black",
          fontFamily: "Bebas Neue",
          fontSize: "1.2rem",
        }}
      >
        <strong>Phone: </strong> (808) 352-0185 | <strong>Address: </strong>{" "}
        2480 Iluna Pl. Honolulu, Hawaii 96819
      </p>
    </Section>
  </Layout>
)

export default IndexPage
