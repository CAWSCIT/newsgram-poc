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
import MessageBar from './components/MessageBar.jsx'
import NewsGramContactList from './components/NewsGramContactList.jsx'
import TableOfContents from './components/TableOfContents.jsx'
import DoubleColumnContent from './components/DoubleColumnContent.jsx'
import InterviewContent from './components/InterviewContent.jsx'
import DoubleImageContent from './components/DoubleImageContent.jsx'
import StandAloneDoubleColumnContent from './components/StandAloneDoubleColumnContent.jsx'
import CTA2 from './components/CTA2.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MessageBar />
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <Header />
      <TableOfContents />
      <Divider wording="Page 1" />
      <DoubleColumn />
      <Divider wording="Page 2" />
      <Content hasDoubleColumn={true}/>
      <Divider wording="Page 3" />
      <SingleImage title="Finance Committee" imgSrc={`${import.meta.env.BASE_URL}img/how-dark.png`} />
      {/* <Divider wording="Page 4" /> */}
      {/* <Content /> */}
      <Divider wording="Page 4" />
      <SingleImage title="2026 World Convention" imgSrc={`${import.meta.env.BASE_URL}img/caws-convention.png`} />
      <Divider wording="Page 6" />
      <InterviewContent />
      <Divider wording="Page 7" />
      <DoubleImageContent />
      <Divider wording="Page 8" />
      <ContentDoubleImage />
      <Divider wording="Page 9" />
      <Content />
      <Divider wording="Page 10" />
      <StandAloneDoubleColumnContent />
      <Divider wording="Page 11" />
      <CTA />

      {/* No page divider needed */}
      <CTA2 />
      <Divider wording="Page 12" />
      <Content />
      <Subscribe />

      <Divider wording="Page 13" />
      <Calendar />

      <Divider wording="Page 14" />
      <DonationSchedule />

      <Divider wording="How to submit an article" />
      <CTA />

    </div>
  </StrictMode>,
)
