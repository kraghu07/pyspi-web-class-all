class Circle  { 
    static double area (int r ) { 
    // int r=5; 
    final double pi=3.142; 
    double result=pi*r*r; 
    return result; 
    } 
    public static void main(String[] args) { 
    // double x=area(); 
    // System.out.println("area is "+x); 
    area(6);
    } 
}