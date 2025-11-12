import React from 'react'
import ProfileCard from './ProfileCard'

const ProfileCardSection: React.FC = () => {
  const CONTACT_EMAIL = 'aderemi@raydar.dev' // Preferred contact email address
  const SUBJECT = 'Portfolio Contact'
  const BODY = 'Hi Aderemi, I visited your portfolio and would like to get in touch.'

  const handleContactClick = () => {
    const subject = encodeURIComponent(SUBJECT)
    const body = encodeURIComponent(BODY)
    // Use the user's default email client via mailto. This works for non-Gmail users.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-background">
      <div className="container mx-auto px-4 flex justify-center">
       <ProfileCard
          name="Aderemi O Azeez"
          title="Software Engineer"
          handle="raycre8tives"
          status="Online"
          contactText="Contact Me"
          avatarUrl="/aderemi-profile.png"
          iconUrl="/code.svg"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={true}
          onContactClick={handleContactClick}
        />
      </div>
    </section>
  )
}

export default ProfileCardSection