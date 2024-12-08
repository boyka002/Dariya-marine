interface MapProps {
    className?: string
  }
  
  export default function Map({ className = '' }: MapProps) {
    return (
        <div
        className={`w-full rounded-3xl overflow-hidden shadow-lg ${className}`}
        style={{ height: '400px' }}
        >
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d31441.21775662487!2d76.26228359253223!3d9.921277873786298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3b087269aaaaaaab%3A0x7dd852d272cd43de!2sDhariya%20Marine%20Engineering%20Services%2C%20dhariya%20marine%2C%2015%2F1945%2C%20near%20Aquinas%20College%2C%20Edakochi%2C%20Kochi%2C%20Kerala%20682010!3m2!1d9.9028619!2d76.2951478!5e0!3m2!1sen!2sin!4v1733549205953!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
    )
  }
  
  