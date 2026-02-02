import link from"next/link";
export default function home(){
  return(
    <div>
      <nav style={{backgroundColor: '#3da95c',padding: '10px'}}>
        <link href="/about" style={{margin: '10px', color: 'white'}}>about us</link>
        <link href="/contact" style={{margin: '10px', color: 'white'}}>contact us</link>
              </nav>
              <div>
                <h1>welcome to our website</h1>
                <p>this is the home page of our awesome website built with next.js</p>
              </div>
    </div>
  )
}