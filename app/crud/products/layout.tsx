 
export const metadata = {
    title: "Products",
}

const productLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="py-10 px-12">
      {children}
    </div>
  )
}

export default productLayout
