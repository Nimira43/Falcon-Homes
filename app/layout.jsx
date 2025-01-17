import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'

export const metadata ={
  title: 'Unicorn Homes',
  keyword: 'properties, home, real estate, house, flat, apartment, rental',
  description: 'Property website using Next JS'
}

const MainLayout = ({ children }) => {
  return ( 
    <html>
      <body>
        <main>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
   )
}
 
export default MainLayout