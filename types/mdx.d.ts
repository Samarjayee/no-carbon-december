// types/mdx.d.ts
declare module "*.mdx" {
	let MDXComponent: (props) => JSX.Element;
	export default MDXComponent;
}
declare namespace JSX {
	interface IntrinsicElements {
	  'climate-clock': any;
	}
  }