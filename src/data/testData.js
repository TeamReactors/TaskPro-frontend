export const columns = [
    {
        "id": 1,
        "title": "To Do",
        "board_id": 1,
        "position": 1,
        "created_at": "2024-01-10T14:30:00Z"
    },
    {
        "id": 2,
        "title": "In Progress",
        "board_id": 1,
        "position": 2,
        "created_at": "2024-01-10T14:30:00Z"
    },
    {
        "id": 3,
        "title": "In Review",
        "board_id": 2,
        "position": 3,
        "created_at": "2024-01-10T14:30:00Z"
    },
    {
        "id": 4,
        "title": "Done",
        "board_id": 2,
        "position": 4,
        "created_at": "2024-01-10T14:30:00Z"
    },
    {
        "id": 5,
        "title": "Archived",
        "board_id": 3,
        "position": 5,
        "created_at": "2024-01-10T14:30:00Z"
    }
];

export const tasks = [

    {
        id: 1,
        title: "Design Homepage",
        description: "Create the initial design for the homepage.",
        priority: "high",
        column_id: 3,
        board_id: 5,
        deadline: "2024-02-15T09:00:00Z",
        created_at: "2024-01-10T14:30:00Z"
    },
    {
        id: 2,
        title: "Setup Database",
        description: "Initialize and configure the database schema.",
        priority: "high",
        column_id: 1,
        board_id: 5,
        deadline: "2024-02-10T09:00:00Z",
        created_at: "2024-01-10T14:30:00Z"
    },
    {
        id: 3,
        title: "Create API Endpoints",
        description: "Develop RESTful API endpoints for the backend.",
        priority: "high",
        column_id: 2,
        board_id: 5,
        deadline: "2024-02-20T09:00:00Z",
        created_at: "2024-01-10T14:30:00Z"
    },
    {
        id: 4,
        title: "Write Unit Tests",
        description: "Add comprehensive unit tests for core functions.",
        priority: "medium",
        column_id: 2,
        board_id: 5,
        deadline: "2024-02-25T09:00:00Z",
        created_at: "2024-01-10T14:30:00Z"
    },
    {
        id: 5,
        title: "Code Review",
        description: "Review and approve pull requests.",
        priority: "medium",
        column_id: 3,
        board_id: 5,
        deadline: "2024-02-18T09:00:00Z",
        created_at: "2024-01-10T14:30:00Z"
    },
    {
        id: 6,
        title: "Deploy to Staging",
        description: "Deploy application to staging environment.",
        priority: "high",
        column_id: 3,
        board_id: 5,
        deadline: "2024-02-22T09:00:00Z",
        created_at: "2024-01-10T14:30:00Z"
    },
    {
        id: 7,
        title: "Performance Optimization",
        description: "Optimize application performance and load times.",
        priority: "medium",
        column_id: 2,
        board_id: 5,
        deadline: "2024-02-28T09:00:00Z",
        created_at: "2024-01-10T14:30:00Z"
    },
    {
        id: 8,
        title: "User Documentation",
        description: "Create user guide and documentation.",
        priority: "low",
        column_id: 1,
        board_id: 5,
        deadline: "2024-03-05T09:00:00Z",
        created_at: "2024-01-10T14:30:00Z"
    },
    {
        id: 9,
        title: "Security Audit",
        description: "Perform security and vulnerability assessment.",
        priority: "high",
        column_id: 3,
        board_id: 5,
        deadline: "2024-02-20T09:00:00Z",
        created_at: "2024-01-10T14:30:00Z"
    },
    {
        id: 10,
        title: "Release Notes",
        description: "Prepare and publish release notes.",
        priority: "low",
        column_id: 4,
        board_id: 5,
        deadline: "2024-03-01T09:00:00Z",
        created_at: "2024-01-10T14:30:00Z"
    }
];