import { GodRepository } from '../../../domain/repositories/god.repository';
import { God } from '../../../domain/entities/god';
import { CreateGodService } from '../../../application/use-cases/create.god.service';

describe('CreateGodService', () => {
  let createGodService: CreateGodService;
  let godRepository: GodRepository;

  beforeEach(() => {
    // Create a mock instance of the GodRepository
    godRepository = {
      getGods: jest.fn(),
      saveGod: jest.fn(),
    };

    // Create an instance of the CreateGodService with the mock repository
    createGodService = new CreateGodService(godRepository);
  });

  it('should create a new god', async () => {
    // Arrange
    const godData: God = {
      id: undefined,
      name: 'Zeus',
      culture: 'Greek',
      powers: ['Thunderbolt', 'Shape-shifting'],
    };

    // Mock the repository to return the created god
    jest.spyOn(godRepository, 'saveGod').mockResolvedValue(godData);

    // Act
    const createdGod = await createGodService.createGod(godData);

    // Assert
    expect(createdGod).toEqual(godData);
    expect(godRepository.saveGod).toHaveBeenCalledWith(godData);
  });
});
