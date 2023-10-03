
export type PriorityType = 'Normal' | 'Alta' | 'Urgente'

export type StatusType = 'Aberta' | 'Andamento' | 'Canceladas' | 'Concluídas'

export type OccurenceType = 'Incêndio' | 'Vandalismo' | 'Alagamento' | 'Veículo Irregular' | 'Furto'

export type OccurrenceDTO = {
  id?: string
  description: string
  type: OccurenceType
  date: Date
  address: string
  priority: PriorityType
  status: StatusType
  createdAt: Date
  updatedAt: Date
}