export default function Contact() {
    return (
        <section className="min-h-screen bg-black flex flex-col items-center py-12">
            <h1 className="text-white text-3xl mb-8 text-center">Contact</h1>
            <div className="max-w-2xl text-white text-center space-y-6">
                <p>
                    We'd love to hear from you! Whether you have questions about our breads, want to place a special order, or just want to say hello, please reach out.
                </p>
                <p>
                    Email: <a href="mailto:info@threecrowsbread.com" className="underline">info@threecrowsbread.com</a><br />
                    Phone: <span className="whitespace-nowrap">555-123-4567</span><br />
                    Visit us at: 123 Baker Street, Breadtown
                </p>
            </div>
        </section>
    )
}