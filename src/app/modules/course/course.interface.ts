interface Course {
    title: string,
    instructor: string,
    categoryId: string,
    price: number,
    tags: [
        {
            name: string,
            isDeleted: boolean
        }
    ],
    startDate: string,
    endDate: string,
    language: string,
    provider: string,
    durationInWeeks: number,
    details: {
        level: string,
        description: string
    }
}

export default Course