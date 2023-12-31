import { OccurrenceDTO } from "@/dtos/OccurrenceDTO";

export const occurrenceMock: OccurrenceDTO[] = [
  {
    id: 'furto-01',
    description: 'Suspeita de furto de veiculo.',
    address: 'R. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-155',
    status: 'Aberta',
    priority: 'Normal',
    type: 'Furto',
    date: new Date("2023-09-01T16:45:30"),
    createdAt: new Date("2023-09-01T16:45:30"),
    updatedAt: new Date("2023-09-01T16:45:30"),
  },
  {
    id: 'vandalismo-01',
    description: 'Suspeita de Vandalismo.',
    address: 'R. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-155',
    status: 'Aberta',
    priority: 'Normal',
    type: 'Vandalismo',
    date: new Date("2023-09-02T16:45:30"),
    createdAt: new Date("2023-09-01T16:45:30"),
    updatedAt: new Date("2023-09-01T16:45:30"),
  },
  {
    id: 'Furto-02',
    description: 'Suspeita de furto de veiculo.',
    address: 'R. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-155',
    status: 'Aberta',
    priority: 'Normal',
    type: 'Furto',
    date: new Date("2023-09-03T16:45:30"),
    createdAt: new Date("2023-09-01T16:45:30"),
    updatedAt: new Date("2023-09-01T16:45:30"),
  },
  {
    id: 'furto-03',
    description: 'Suspeita de furto de veiculo.',
    address: 'R. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-155',
    status: 'Canceladas',
    priority: 'Normal',
    type: 'Furto',
    date: new Date("2023-09-01T16:45:30"),
    createdAt: new Date("2023-09-01T16:45:30"),
    updatedAt: new Date("2023-09-01T16:45:30"),
  },
  {
    id: 'vandalismo-02',
    description: 'Suspeita de furto de veiculo.',
    address: 'R. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-155',
    status: 'Andamento',
    priority: 'Urgente',
    type: 'Furto',
    date: new Date("2023-09-01T16:45:30"),
    createdAt: new Date("2023-09-01T16:45:30"),
    updatedAt: new Date("2023-09-01T16:45:30"),
  },
  {
    id: 'irregular-01',
    description: 'Suspeita de carro placa irregular.',
    address: 'R. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-155',
    status: 'Concluídas',
    priority: 'Normal',
    type: 'Veículo Irregular',
    date: new Date("2023-09-10T16:45:30"),
    createdAt: new Date("2023-09-01T16:45:30"),
    updatedAt: new Date("2023-09-01T16:45:30"),
  },
  {
    id: 'furto-04',
    description: 'Suspeita de furto de veiculo.',
    address: 'R. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-155',
    status: 'Aberta',
    priority: 'Normal',
    type: 'Furto',
    date: new Date("2023-09-11T16:45:30"),
    createdAt: new Date("2023-09-01T16:45:30"),
    updatedAt: new Date("2023-09-01T16:45:30"),
  },
  {
    id: 'vandalismo-03',
    description: 'Suspeita de Vandalismo.',
    address: 'R. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-155',
    status: 'Aberta',
    priority: 'Normal',
    type: 'Vandalismo',
    date: new Date("2023-09-12T16:45:30"),
    createdAt: new Date("2023-09-01T16:45:30"),
    updatedAt: new Date("2023-09-01T16:45:30"),
  },
  {
    id: 'furto-04',
    description: 'Suspeita de furto de veiculo.',
    address: 'R. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-155',
    status: 'Aberta',
    priority: 'Normal',
    type: 'Furto',
    date: new Date("2023-09-13T16:45:30"),
    createdAt: new Date("2023-09-01T16:45:30"),
    updatedAt: new Date("2023-09-01T16:45:30"),
  },
  {
    id: 'furto-05',
    description: 'Suspeita de furto de veiculo.',
    address: 'R. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-155',
    status: 'Canceladas',
    priority: 'Normal',
    type: 'Furto',
    date: new Date("2023-09-01T16:45:30"),
    createdAt: new Date("2023-09-01T16:45:30"),
    updatedAt: new Date("2023-09-01T16:45:30"),
  },
  {
    id: 'furto-06',
    description: 'Suspeita de furto de veiculo.',
    address: 'R. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-155',
    status: 'Andamento',
    priority: 'Normal',
    type: 'Furto',
    date: new Date("2023-09-20T16:45:30"),
    createdAt: new Date("2023-09-01T16:45:30"),
    updatedAt: new Date("2023-09-01T16:45:30"),
  },
  {
    id: 'irregular-02',
    description: 'Suspeita de carro placa irregular.',
    address: 'R. Barão de Jeremoabo - Ondina, Salvador - BA, 40170-155',
    status: 'Concluídas',
    priority: 'Normal',
    type: 'Veículo Irregular',
    date: new Date("2023-09-22T16:45:30"),
    createdAt: new Date("2023-09-01T16:45:30"),
    updatedAt: new Date("2023-09-01T16:45:30"),
  }
]