export default function FAQ() {
    const faqs = [
      {
        question: "What is a FAQ and why is it important?",
        answer: "FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic."
      },
      {
        question: "Why should I use a FAQ on my website or app?",
        answer: "Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions."
      },
      {
        question: "How do I effectively create a FAQ section?",
        answer: "Creating a FAQ section starts with gathering the most frequent questions you receive from your users or customers. Once you have a list, you need to write clear, detailed, and helpful answers to each question."
      },
      {
        question: "What are the benefits of having a well-maintained FAQ section?",
        answer: "There are numerous advantages to maintaining a robust FAQ section. Firstly, it provides immediate answers to common queries, which improves the user experience."
      }
    ];
  
    return (
      <div className="w-full py-12 bg-white md:py-24">
        <div className="container px-4 md:px-6 mx-auto max-w-[800px]">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Common Questions & Answers</h2>
            <p className="text-gray-500 md:text-lg max-w-[700px]">
              Find out all the essential details about our platform and how it can serve your needs.
            </p>
          </div>
  
          <div className="mt-12 space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 font-semibold text-gray-500 bg-gray-100 rounded-md">
                  {index + 1}
                </div>
                <div className="flex-grow space-y-2">
                  <h3 className="text-lg font-semibold">
                    {faq.question}
                  </h3>
                  <p className="text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }