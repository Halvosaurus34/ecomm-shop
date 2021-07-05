import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Ruby Mercantile",
  description:
    "Ruby Mercantile is a Sylvan Lake based shop that sells the best local produce, woodworks, and flowers!",
  keywords:
    "farm, local, red deer, buy local, produce, Ruby Mercantile, Ruby, Mercantile, buy local red deer, local business red deer, local business sylvan lake, buy red deer produce, sale red deer produce, woodworking, buy woodworking, Ruby Mercantile Red Deer, Ruby Mercantile Sylvan Lake, Sylvan Lake",
};

export default Meta;
