import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children, t, openManageCookies, openPrivacyPolicy }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer
        t={t}
        openManageCookies={openManageCookies}
        openPrivacyPolicy={openPrivacyPolicy}
      />
    </>
  );
};

export default Layout;
