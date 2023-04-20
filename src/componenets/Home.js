import React from 'react'
import Card from './Card'

const Home = () => {
    return (
        <div>
            <div className="d-flex justify-content-around flex-wrap">
                <Card name='Rock Lee' text="If you're looking for a talented writer who can copy and write quickly, look no further! As a skilled wordsmith with lightning-fast typing skills." rating={4.5} reviews={70} img={"https://1.bp.blogspot.com/-PPYwmApr-w8/X-xS0MczEzI/AAAAAAAADCM/vrA141x5khUZ51Lw7bimxdus8jhDZAgLQCNcBGAsYHQ/s842/eng%2B12th_00000.png"} />
                <Card
                    name="Naruto Uzumaki"
                    text="I'm a creative writer with a passion for storytelling. Let me help bring your ideas to life with engaging, original content."
                    rating={4.8}
                    reviews={120}
                    img={"https://ignousolvedassignmentproject.in/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-06-at-10.38.07-AM-1-770x1024.jpeg"}
                />

                <Card
                    name="Sakura Haruno"
                    text="Looking for a detail-oriented editor who can polish your writing to perfection? Look no further! I have an eye for grammar and a knack for turning rough drafts into polished works of art."
                    rating={4.9}
                    reviews={90}
                    img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-08KUXf1lgOlSKLf_TuJPcsNBzgpDJP5FC9B4u1LkCVEIlMO7tx6qoE0FcdJ7nbEON0g&usqp=CAU"}
                />

                <Card
                    name="Kakashi Hatake"
                    text="Need a technical writer who can explain complex concepts in plain English? I'm your guy. With years of experience in the tech industry, I know how to make even the most technical topics easy to understand."
                    rating={4.7}
                    reviews={80}
                    img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpHZH9lmhTh1B_ygastHwQxCmrE9-GCg5E8jtyBDJyEiVdlHPyovaJeTUijT_5QTQntwo&usqp=CAU"}
                />

                <Card
                    name="Sasuke Uchiha"
                    text="As a bilingual writer, I can help you reach a wider audience with your content. Whether you need your work translated or written from scratch, I have the skills to get the job done."
                    rating={4.6}
                    reviews={100}
                    img={"https://www.ignougalaxy.in/wp-content/uploads/2022/07/samplesss-e1660043841465.jpeg"}
                />

                <Card
                    name="Hinata Hyuga"
                    text="Looking for a creative writer who can bring your brand to life? Look no further! With a keen understanding of marketing and branding, I can help you create content that resonates with your target audience."
                    rating={4.5}
                    reviews={70}
                    img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEi_mkRFYgBKs74Z8i-ZesNhBtRAl6_ML3EU547Gzbbix6szR3Zz8L-xLfDiOFEdlAa4&usqp=CAU"}
                />

                <Card
                    name="Shikamaru Nara"
                    text="As a freelance writer with a flexible schedule, I can help you meet tight deadlines without sacrificing quality. Whether you need a blog post, article, or white paper, I can deliver quality content on time."
                    rating={4.4}
                    reviews={60}
                    img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBxWjifAdqwMJc3ut9-CFX50Z49k6b8TlubtgYJnDqGZAPzbwmbpAKbIQ2bA1C-Tf7_KE&usqp=CAU"}
                />
            </div>
        </div>
    )
}

export default Home
