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
                    img={"https://i.pinimg.com/originals/15/b5/5c/15b55c37de4d4a2d2f8c4a9633eb4b84.png"}
                />

                <Card
                    name="Sakura Haruno"
                    text="Looking for a detail-oriented editor who can polish your writing to perfection? Look no further! I have an eye for grammar and a knack for turning rough drafts into polished works of art."
                    rating={4.9}
                    reviews={90}
                    img={"https://64.media.tumblr.com/38ce0d76de0f61536c8e9ec9d1ba6a88/6b13908128509d11-7e/s400x600/6f15c6d9e6d9a6a2b03a99c66aa1d3dc0233c739.png"}
                />

                <Card
                    name="Kakashi Hatake"
                    text="Need a technical writer who can explain complex concepts in plain English? I'm your guy. With years of experience in the tech industry, I know how to make even the most technical topics easy to understand."
                    rating={4.7}
                    reviews={80}
                    img={"https://i.pinimg.com/originals/26/24/8e/26248ef28c48098de494ab73dc54f48d.png"}
                />

                <Card
                    name="Sasuke Uchiha"
                    text="As a bilingual writer, I can help you reach a wider audience with your content. Whether you need your work translated or written from scratch, I have the skills to get the job done."
                    rating={4.6}
                    reviews={100}
                    img={"https://i.pinimg.com/originals/d8/ee/bc/d8eebc6b03a6b8e1af50c6da31da6c47.png"}
                />

                <Card
                    name="Hinata Hyuga"
                    text="Looking for a creative writer who can bring your brand to life? Look no further! With a keen understanding of marketing and branding, I can help you create content that resonates with your target audience."
                    rating={4.5}
                    reviews={70}
                    img={"https://i.pinimg.com/originals/53/b3/11/53b311a7a4fb01926708a79e4a2e4b4d.png"}
                />

                <Card
                    name="Shikamaru Nara"
                    text="As a freelance writer with a flexible schedule, I can help you meet tight deadlines without sacrificing quality. Whether you need a blog post, article, or white paper, I can deliver quality content on time."
                    rating={4.4}
                    reviews={60}
                    img={"https://i.pinimg.com/originals/3d/68/fc/3d68fc05b9ec0c8f04a16d184be19dc1.png"}
                />
            </div>
        </div>
    )
}

export default Home
