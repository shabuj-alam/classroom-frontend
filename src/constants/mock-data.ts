import {Subject} from "@/types";

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "Computer Science",
        description: "Fundamental concepts of programming, algorithms, and computer systems.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 2,
        code: "MATH201",
        name: "Linear Algebra",
        department: "Mathematics",
        description: "Study of vectors, matrices, systems of linear equations, and vector spaces.",
        createdAt: new Date().toISOString(),
    },
    {
        id: 3,
        code: "PHYS102",
        name: "General Physics II",
        department: "Physics",
        description: "Principles of electromagnetism, optics, and modern physics.",
        createdAt: new Date().toISOString(),
    }
];