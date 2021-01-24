import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/app/themeStyles";
import { GlobalStyle } from "../../sections/app.style";
import SEO from "../../components/seo";
import Navigation from "../../sections/Navigation";
import Footer from "../../sections/Footer";
import Layout from "../../components/layout";
import AllMembers from "../../sections/Community/Members-grid/AllMembers";
import ActiveMembers from "../../sections/Community/Members-grid/ActiveMembers";
import InactiveMembers from "../../sections/Community/Members-grid/InactiveMembers";
import Maintainers from "../../sections/Community/Members-grid/Maintainers";
import MeshMate from "../../sections/Community/Members-grid/MeshMate";

const options = [
  { label: "All Members", value: "all" },
  { label: "Active Members", value: "active" },
  { label: "Inactive Members", value: "inactive" },
  { label: "Maintainers", value: "maintainers" },
  { label: "MeshMates", value: "meshmates" }
];

const MembersPage = () => {
  const [members, setMembers] = useState(options[0]);

  const handleChange = value => {
    setMembers(value);
  };

  let MembersView = props => {
    switch (members.value) {
      case "active" : return <ActiveMembers {...props} />;
      case "inactive" : return <InactiveMembers {...props}/>;
      case "maintainers" : return <Maintainers {...props}/>;
      case "meshmates" : return <MeshMate {...props}/>;
      default: return <AllMembers {...props}/>;
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Members" />
        <Navigation />
        <MembersView options={options} handleChange={handleChange}
          members={members} />
        <Footer/>
      </Layout>
    </ThemeProvider>
  );
};

export default MembersPage;
