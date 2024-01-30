import { GodRepository } from '../../../domain/repositories/god.repository';
import { God } from '../../../domain/entities/god';
import { GetGodsService } from '../../../application/use-cases/get.gods.service';

describe('GetGodsService', () => {
  let getGodsService: GetGodsService;
  let godRepository: GodRepository;

  beforeEach(() => {
    // Create a mock instance of the GodRepository
    godRepository = {
      getGods: jest.fn(),
      saveGod: jest.fn(),
    };

    // Create an instance of the GetGodsService with the mock repository
    getGodsService = new GetGodsService(godRepository);
  });

  it('should return a list of gods', async () => {
    // Arrange
    const godsData: God[] = [
      {
        id: '1',
        name: 'Zeus',
        culture: 'Greek',
        powers: ['Thunderbolt', 'Shape-shifting'],
      },
      {
        id: '2',
        name: 'Thor',
        culture: 'Norse',
        powers: ['Mjolnir', 'Control over lightning'],
      },
    ];

    // Mock the repository to return the gods data
    jest.spyOn(godRepository, 'getGods').mockResolvedValue(godsData);

    // Act
    const result = await getGodsService.execute();

    // Assert
    expect(result).toEqual({ godsData: 'hola' });
    expect(godRepository.getGods).toHaveBeenCalled();
  });
});
