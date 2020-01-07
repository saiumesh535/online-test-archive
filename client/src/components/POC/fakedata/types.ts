export interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
}

export interface TestData {
    questions: Question[];
}
