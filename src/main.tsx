import React from 'react'
import ReactDOM from 'react-dom/client'
const OtherPage = React.lazy(()=> import("./OtherPage"))
ReactDOM.createRoot(document.getElementById('root')!).render(
 // <React.StrictMode>
      <React.Suspense>
          <OtherPage/>
      </React.Suspense>
  //</React.StrictMode>,
)

