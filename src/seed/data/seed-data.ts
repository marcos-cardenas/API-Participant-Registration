interface SeedAttendee {
  email: string;
  fullName: string;
  isVip: boolean;
}

interface SeedData {
  attendees: SeedAttendee[];
}

export const initialData: SeedData = {
  attendees: [
    { email: 'juan.perez@example.com', fullName: 'Juan Perez', isVip: true },
    { email: 'maria.lopez@example.com', fullName: 'Maria Lopez', isVip: false },
    {
      email: 'pedro.sanchez@example.com',
      fullName: 'Pedro Sanchez',
      isVip: true,
    },
    { email: 'ana.gomez@example.com', fullName: 'Ana Gomez', isVip: false },
    {
      email: 'carlos.martinez@example.com',
      fullName: 'Carlos Martinez',
      isVip: true,
    },
    {
      email: 'laura.rodriguez@example.com',
      fullName: 'Laura Rodriguez',
      isVip: false,
    },
    {
      email: 'fernando.jimenez@example.com',
      fullName: 'Fernando Jimenez',
      isVip: true,
    },
    { email: 'elena.perez@example.com', fullName: 'Elena Perez', isVip: false },
    {
      email: 'josefina.martinez@example.com',
      fullName: 'Josefina Martinez',
      isVip: true,
    },
    {
      email: 'javier.castro@example.com',
      fullName: 'Javier Castro',
      isVip: false,
    },
    {
      email: 'mario.moreno@example.com',
      fullName: 'Mario Moreno',
      isVip: true,
    },
    {
      email: 'carmen.hernandez@example.com',
      fullName: 'Carmen Hernandez',
      isVip: false,
    },
    {
      email: 'luis.hernandez@example.com',
      fullName: 'Luis Hernandez',
      isVip: true,
    },
    {
      email: 'beatriz.fernandez@example.com',
      fullName: 'Beatriz Fernandez',
      isVip: false,
    },
    {
      email: 'ricardo.garcia@example.com',
      fullName: 'Ricardo Garcia',
      isVip: true,
    },
    {
      email: 'silvia.sanchez@example.com',
      fullName: 'Silvia Sanchez',
      isVip: false,
    },
    {
      email: 'andres.lopez@example.com',
      fullName: 'Andres Lopez',
      isVip: true,
    },
    {
      email: 'marta.rodriguez@example.com',
      fullName: 'Marta Rodriguez',
      isVip: false,
    },
    {
      email: 'alvaro.martinez@example.com',
      fullName: 'Alvaro Martinez',
      isVip: true,
    },
    {
      email: 'patricia.perez@example.com',
      fullName: 'Patricia Perez',
      isVip: false,
    },
  ],
};
