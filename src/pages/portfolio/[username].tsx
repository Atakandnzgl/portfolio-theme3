import { GetServerSideProps } from 'next';
import PortfolioMain from '@/components/portfolio/PortfolioMain';
import Portfolio from '@/constants/models/Portfolio';
import { ThemeEnum } from '@/constants/enums/ThemeEnum';

interface PortfolioPageProps {
  portfolio: Portfolio[] | null;
  error?: any;
}

export default function PortfolioPage({ portfolio, error }: PortfolioPageProps) {
  return <PortfolioMain portfolio={portfolio} error={error} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.params as { username: string };

  try {
    // Burada API çağrısı yapılacak
    // Şimdilik mock data döndürüyoruz
    const mockPortfolio: Portfolio = {
      _id: '1',
      firstName: 'John',
      lastName: 'Doe',
      imgUrl: '/images/profile/atakan2.png',
      userName: username,
      themeId: ThemeEnum.PERSONA, // PERSONA theme
      about: 'I am a passionate web developer with expertise in modern technologies.',
      role: 'Full Stack Developer',
      city: 'Istanbul',
      country: 'Turkey',
      email: 'john@example.com',
      skills: [
        {
          title: 'React',
          description: 'Modern React with hooks and context'
        },
        {
          title: 'Node.js',
          description: 'Backend development with Express'
        }
      ],
      experiences: [
        {
          title: 'Senior Developer',
          description: 'Led development team for major projects',
          date: '2022-2024'
        }
      ],
      socialMedias: [
        {
          icon: 'GitHubIcon',
          link: 'https://github.com'
        }
      ],
      activeTheme: ThemeEnum.PERSONA,
      availableThemes: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      blogs: []
    };

    return {
      props: {
        portfolio: [mockPortfolio],
        error: null
      }
    };
  } catch (error) {
    return {
      props: {
        portfolio: null,
        error: 'Failed to load portfolio'
      }
    };
  }
}; 