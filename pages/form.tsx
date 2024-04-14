import React, { useState, useEffect } from "react";
import "../app/globals.css";

interface Option {
  value: number | ""; // 빈 문자열은 "Please select" 옵션을 위해 포함됩니다.
  label: string;
}

interface Question {
  key: string;
  question: string;
  options: Option[];
}

const Form: React.FC = () => {
  const questions: Question[] = [
    {
      key: "bedrooms",
      question: "Number of Bedrooms",
      options: [
        { value: -1, label: "Please select" },
        { value: 1, label: "1 Bedroom" },
        { value: 2, label: "2 Bedroom" },
        { value: 3, label: "3 Bedroom" },
      ],
    },
    {
      key: "bathrooms",
      question: "Number of Bathrooms",
      options: [
        { value: -1, label: "Please select" },
        { value: 1, label: "1 Bath" },
        { value: 2, label: "2 Bath" },
        { value: 3, label: "3 Bath" },
      ],
    },
    {
      key: "stories",
      question: "Number of Stories",
      options: [
        { value: -1, label: "Please select" },
        { value: 1, label: "1 Str" },
        { value: 2, label: "2 Str" },
        { value: 3, label: "3 Str" },
      ],
    },
    {
      key: "mainroad",
      question: "Mainroad",
      options: [
        { value: -1, label: "Please select" },
        { value: 1, label: "Yes" },
        { value: 0, label: "No" },
      ],
    },
    {
      key: "guestroom",
      question: "Guestroom",
      options: [
        { value: -1, label: "Please select" },
        { value: 1, label: "Yes" },
        { value: 0, label: "No" },
      ],
    },
    {
      key: "hotwaterheating",
      question: "Hot Water Heating",
      options: [
        { value: -1, label: "Please select" },
        { value: 1, label: "Yes" },
        { value: 0, label: "No" },
      ],
    },
    {
      key: "basement",
      question: "Basement",
      options: [
        { value: -1, label: "Please select" },
        { value: 1, label: "Yes" },
        { value: 0, label: "No" },
      ],
    },
    {
      key: "airconditioning",
      question: "Air Conditioning?",
      options: [
        { value: -1, label: "Please select" },
        { value: 1, label: "Yes" },
        { value: 0, label: "No" },
      ],
    },
    {
      key: "parking",
      question: "Number of Parking Space",
      options: [
        { value: -1, label: "Please select" },
        { value: 1, label: "One" },
        { value: 2, label: "Two" },
        { value: 3, label: "Three" },
      ],
    },
  ];

  const [formData, setFormData] = useState<Record<string, number | "">>({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    setIsSubmitDisabled(Object.values(formData).some((value) => value === -1));
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    key: string
  ) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!Object.values(formData).every((value) => value !== "")) {
      console.error("모든 필드를 올바르게 선택해주세요.");
      return;
    }

    const queryParams = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) =>
      queryParams.append(key, value.toString())
    );

    const queryString = queryParams.toString();

    try {
      const response = await fetch(
        `http://localhost:5328/predict?${queryString}`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      window.location.href = `/estimate?price=${data.price}`;
    } catch (error) {
      console.error("Failed to fetch:", error);
    }
  };

  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 pt-5 pb-5 ">
      <form
        className="max-w-lg mx-auto pt-5 pb-5 space-y-4"
        onSubmit={handleSubmit}
      >
        {questions.map((question, index) => (
          <div key={question.key}>
            {" "}
            {/* 인덱스 대신 질문의 key를 사용합니다. */}
            <label
              htmlFor={`dropdown-${question.key}`}
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              {question.question}
            </label>
            <select
              id={`dropdown-${question.key}`}
              className="block w-full px-4 py-2 text-base text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => handleChange(e, question.key)}
              value={formData[question.key]}
            >
              {question.options.map((option) => (
                <option key={option.value.toString()} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitDisabled}
        >
          FIND!
        </button>
      </form>
    </div>
  );
};

export default Form;
