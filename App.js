import { Sandpack } from "@codesandbox/sandpack-react";

export default function App() {
  return (
    <Sandpack 
      template="react"
      options={{
        externalResources: ["https://cdn.tailwindcss.com"]
      }}  
      files={{
        "/App.js": `export default function App() {
  return <div className ='bg-green-50'>Hello Sandpackk</div>
}`,
      }}
    />
  );
}
