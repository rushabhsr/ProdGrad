import { render, screen, cleanup, fireEvent } from "@testing-library/react";
// Importing the jest testing library
import '@testing-library/jest-dom'
import App from "./App";
import ArtItem from "./Components/Art/ArtItem";
import MyCarousel from "./Components/Carousel";

// afterEach function runs after each test suite is executed
afterEach(() => {
    cleanup();
})

describe("App Component", () => {

    // Test 1
    test("App Rendering", () => {
        render(<App />); // Rendering the App
        const myNavbar = screen.getByTestId("myNavbar");
        const myCarousel = screen.getByTestId("myCarousel");
        const categoryNav = screen.getByTestId("categoryNav");
        expect(myNavbar).toBeInTheDocument();
        expect(myCarousel).toBeInTheDocument();
        expect(categoryNav).toBeInTheDocument();
    })

    // // Test 2
    test("Logo Text", () => {
        render(<App />);
        const myNavbar = screen.getByTestId("myNavbar");
        expect(myNavbar).toHaveTextContent("ArtTales");
    })

    // Test 3
    test("Navbar Navigation", () => {
        render(<App />);
        const navHome = screen.getByTestId("navHome");
        const contactUs1 = screen.getByTestId("contactUs1");
        const contactUs2 = screen.getByTestId("contactUs2");
        const contactUs3 = screen.getByTestId("contactUs3");
        expect(navHome).toHaveTextContent("Home");
        expect(contactUs1).toHaveTextContent("ArtTales_05");
        expect(contactUs2).toHaveTextContent("Dhruvi Virani");
        expect(contactUs3).toHaveTextContent("Contact via email");
        // expect(navHome).toBeEmptyDOMElement();
        expect(navHome).toHaveAttribute('href', '/')
        expect(contactUs1).toHaveAttribute('href', 'https://www.instagram.com/art_tales05/')
        expect(contactUs2).toHaveAttribute('href', 'https://www.facebook.com/dhruvi.virani98/')
        expect(contactUs3).toHaveAttribute('href', 'mailto:tistyvirani1702@gmail.com')
    })
    // Test 4
    test("Carousel Testing", () => {
        render(<MyCarousel />);
        const carouselItem1 = screen.getByTestId("carouselItem1");
        const carouselItem2 = screen.getByTestId("carouselItem2");
        const carouselItem3 = screen.getByTestId("carouselItem3");
        setTimeout(() => {
            expect(carouselItem2).toBeInTheDocument();
           
        }, 3000);
    })
    // Test 5
    test("user art card", () => {
        render(<ArtItem isAdmin={false}
            key={123}
            id={123}
            image={123}
            title={"testArt"}
            description={"testDescription"}
            category={"testCategory"} />);
        const userArtCard = screen.getByTestId("userArtCard");
        expect(userArtCard).toBeInTheDocument();
    })
    // Test 6
    test("admin art card", () => {
        render(<ArtItem isAdmin={true}
            key={123}
            id={123}
            image={123}
            title={"testArt"}
            description={"testDescription"}
            category={"testCategory"} />);
        const adminArtCard = screen.getByTestId("adminArtCard");
        expect(adminArtCard).toBeInTheDocument();
    })
})
