import React from "react";

import { Link, SectionHeader } from "../components";
import styles from "../styles";

export default {
  p: props => <div {...props} style={styles.p} />,
  h1: props => <SectionHeader {...props} />,
  h2: props => <div {...props} style={styles.h4} />,
  strong: props => <strong {...props} style={styles.strong} />,
  table: props => <table {...props} className={"table"} />,
  a: Link,
  pre: props => <pre {...props} style={{ marginBottom: 15 }} />
};
