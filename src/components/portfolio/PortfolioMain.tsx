import Portfolio from '@/constants/models/Portfolio';
import { useGetPortfolioTheme } from '@/customHooks/portfolio/useGetPortfolioTheme';
import { NextSeo } from "next-seo";

interface PortfolioMainProps {
    portfolio: Portfolio[] | null;
    error?: any;
}

const PortfolioMain = ({ portfolio, error }: PortfolioMainProps) => {
    // Handle server-side errors first
    if (error) return <div>Error loading portfolio</div>;
    if (!portfolio || portfolio.length === 0) return <div>Portfolio not found</div>;

    const getPortfolioTheme = useGetPortfolioTheme(portfolio[0]);

    return (
        <>
            <NextSeo
                title={`${portfolio[0].firstName} ${portfolio[0].lastName} | Portfolio`}
                description={portfolio[0].about || 'Portfolio sayfası'}
                openGraph={{
                    title: `${portfolio[0].firstName} ${portfolio[0].lastName} | Portfolio`,
                    description: portfolio[0].about || 'Portfolio sayfası',
                    images: [
                        {
                            url: portfolio[0].imgUrl,
                            width: 800,
                            height: 600,
                            alt: portfolio[0].firstName + " " + portfolio[0].lastName,
                        }
                    ],
                }}
            />
            <div>
                {getPortfolioTheme()}
            </div>
        </>
    );
};

export default PortfolioMain; 