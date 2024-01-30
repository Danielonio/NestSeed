import { GodRepository } from '../../../domain/repositories/god.repository';
import { God } from '../../../domain/entities/god';
import { SaveGodService } from '../../../application/use-cases/save.god.service';

describe('CreateGodService', () => {
  let saveGodService: SaveGodService;
  let godRepository: GodRepository;

  beforeEach(() => {
    // Create a mock instance of the GodRepository
    godRepository = {
      getGods: jest.fn(),
      saveGod: jest.fn(),
    };

    // Create an instance of the SaveGodService with the mock repository
    saveGodService = new SaveGodService(godRepository);
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
    const createdGod = await saveGodService.createGod(godData);

    // Assert
    expect(createdGod).toEqual(godData);
    expect(godRepository.saveGod).toHaveBeenCalledWith(godData);
  });
});
