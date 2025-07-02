import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Divider from './components/Divider.jsx'
import ContactList from './components/ContactList.jsx'
import DoubleColumn from './components/DoubleColumn.jsx'
import SingleImage from './components/SingleImage.jsx'
import ContentDoubleImage from './components/ContentDoubleImage.jsx'
import CTA from './components/CTA.jsx'
import Subscribe from './components/Subscribe.jsx'
import Calendar from './components/Calendar.jsx'
import DonationSchedule from './components/DonationSchedule.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Header />
      <Content />
      <Divider wording="Info" />
      <DoubleColumn />
      <Divider wording="Article" />
      <Content />
      <Divider wording="Committee Corner" />
      <SingleImage title="Archives" imgSrc="https://placehold.co/600x400" />
      <Divider wording="Article" />
      <ContentDoubleImage />
      <Divider wording="From The Editor" />
      <CTA />
      <Divider wording="Committee Corner" />
      <SingleImage title="Finance" imgSrc={`${import.meta.env.BASE_URL}img/how-dark.png`} />
      <Divider wording="Article" />
      <Content />
      <Subscribe />
      <Divider wording="Upcoming Events" />
      <Calendar />
      <Divider wording="7th Tradition Donations" />
      <DonationSchedule />
    </div>
  </StrictMode>,
)
