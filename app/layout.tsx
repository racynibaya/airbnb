import { Nunito } from 'next/font/google';

import Navbar from './components/navbar/Navbar';

import { LoginModal, RegisterModal, RentModal } from './components/modals';

import ClientOnly from './components/ClientOnly';

import './globals.css';
import ToasterProvider from './providers/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';
import SearchModal from './components/modals/SearchModal';

export const metadata = {
  title: 'AirBnb',
  description: 'AirBnb Clone',
};

const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang='en'>
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>

        <div className='pb-20 pt-28'>{children}</div>
      </body>
    </html>
  );
}
