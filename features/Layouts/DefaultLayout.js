import Navigation from "@/features/common/modules/Navigation/Navigation"
import Footer from "@/features/common/modules/Navigation/components/Footer"

const DefaultLayout = ({children}) => {
    return (
        <>
            <Navigation />
                {children}
            <Footer />
        </>
    )
}

export default DefaultLayout