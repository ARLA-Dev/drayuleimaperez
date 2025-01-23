import { BlogPostHeader2 } from "./components/Blog-post-header2";
import { Content30 } from "./components/Content30";
import { Blog35 } from "./components/Blog35";
import MetaTags from "../../components/MetaTags";

export default function Post() {
  return (
    <div>
      <MetaTags title="Post" description="" image="" name="ArLa" />
      <BlogPostHeader2 />
      <Content30 />
      <Blog35 />
    </div>
  );
}
