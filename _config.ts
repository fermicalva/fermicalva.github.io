import lume from "lume/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

const site = lume({
  src: "./src",
  dest: "./_site",
  location: new URL("https://fermicalva.github.io"),
});

site.use(codeHighlight());

export default site;
