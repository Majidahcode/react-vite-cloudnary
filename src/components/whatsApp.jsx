import React, { useState } from 'react';

function ChatOnboarding() {
  const steps = [
    { id: 1, question: 'أهلاً 👋! ما هي اهتماماتك؟', options: ['رياضة', 'كتب', 'تكنولوجيا', 'أفلام', 'تطوير الذات'] },
    { id: 2, question: 'رائع! من فضلك اكتب رقم واتساب لنرسل لك محتوانا اللطيف:', options: [] }
  ];

  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [inputValue, setInputValue] = useState('');

  const step = steps.find(s => s.id === currentStep);

  function handleOptionClick(option) {
    setAnswers({ ...answers, [step.id]: option });
    setCurrentStep(currentStep + 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setAnswers({ ...answers, [step.id]: inputValue.trim() });
    // TODO: إرسال البيانات إلى الخادم هنا
    console.log('Collected data:', { ...answers, [step.id]: inputValue.trim() });
    alert('شكراً! سنتواصل معك قريباً.');
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-center">محادثة سريعة</h2>
        <div className="space-y-4">
          <p className="text-lg">{step.question}</p>
          {step.options.length > 0 ? (
            <div className="grid grid-cols-2 gap-2">
              {step.options.map(opt => (
                <button
                  key={opt}
                  className="py-2 px-4 bg-blue-100 hover:bg-blue-200 rounded-lg"
                  onClick={() => handleOptionClick(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col">
              <input
                type="tel"
                placeholder="+9665XXXXXXXX"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className="border p-2 rounded-lg mb-3"
              />
              <button
                type="submit"
                className="py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
              >
                إرسال
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatOnboarding