
import java.util.*; 
import java.io.*;

// In this exercise, we want to create a non-uniform random distribution,
// one that adheres to characteristics we define by 
// 1) the size of the dataset generated, and 
// 2) the number of elements for each slot in the distribution.

// Using cumulative probabilities is not the worst way to do this, but
// not the best either and wouldn't scale given a sufficiently large
// dataset, but it's good enough for our requirements of <1M.
// More here: https://oroboro.com/non-uniform-random-numbers/

class Main {
  private static int datasetSize = 997940;
  private static int base = 83000;
  private static HashMap probabilities = new HashMap<Integer,Float>();
  private static HashMap cumulativeProbabilities = new HashMap<Integer,
  Float>();
  // We use this to define and eventually enforce the limits for each 
  // slot in the distribution. 
  private static int[] max = {
    base, base, base, base, base, base,
    base, base, base, base, base, base,
    1000, 500, 250, 100, 50, 25, 10, 5
  };

  private static HashMap distribution;

  public static void main(String[] args) throws IOException {
    initialize();

    BufferedWriter writer = new BufferedWriter(new FileWriter("./test.output"));
    distribute(writer);
    writer.close();    

    System.out.println("Finished: " + distribution.toString());
  }

  private static void initialize() {
    System.out.println("Initializing");

    for (int i=1; i<=max.length; i++) {
      probabilities.put(i, (float) max[i-1]/datasetSize);
    }
  
    probabilities.forEach( (k,v) -> {
      int prev = (int) k-1;
      float total;
      if (cumulativeProbabilities.get(prev) == null) {
        total = 0;
      } else {
        total = (float) cumulativeProbabilities.get(prev); 
      }
      cumulativeProbabilities.put(k, total + (float) probabilities.get(k));
    });

    distribution = createInitialDistribution();    
  }

  // With the cumulative probability map in place,
  // we can start "throwing darts at it" and see where to increment
  // the count for a slot.
  // 
  // We keep track of the count to determine if we've hit the max
  // or hit the same place twice, in which case, try again with a new dart, 
  public static void distribute(BufferedWriter writer) throws IOException {
    for (int i=0; i<datasetSize; i++) {
      Boolean next = true;
      int lastSlot = 0;

      while (next) {
        Random dart = new Random();
        int slot = findDistributionSlot(dart.nextFloat());

        if (slot == lastSlot) {
          next = false;
        } else {
          if (canAddToDistributionSlot(slot)) {
            next = true;
            lastSlot = slot;
            distribution.put(slot, (int) distribution.get(slot) + 1);

            writer.write(Integer.toString(slot) + "\n");
            
            if (slot == 20) {
              System.out.println(Integer.toString(i) + ": " + Integer.toString(slot));
            }

          } else {
            next = false;
          }
        }
      }
    }
  }

  private static Boolean canAddToDistributionSlot(int slot) {
    return (int) distribution.get(slot) < max[slot - 1];
  }

  private static int findDistributionSlot(float val) {
    int slot = 0;

    Set<Map.Entry<Integer,Float>> entries = cumulativeProbabilities.entrySet();
    for ( Map.Entry<Integer,Float> prob : entries) {
      if (val < prob.getValue()) {
        slot = prob.getKey();
        break;
      }
    }
    return slot;
  }

  private static HashMap createInitialDistribution() {
      HashMap distribution = new HashMap<Integer, Integer>();
      Set<Integer> keys = cumulativeProbabilities.keySet();
      for (Integer key : keys) {
        distribution.put(key, 0);
      }

      return distribution;
  }
}
