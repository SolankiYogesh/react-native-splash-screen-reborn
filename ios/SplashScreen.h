
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNSplashScreenSpec.h"

@interface SplashScreen : NSObject <NativeSplashScreenSpec>
#else
#import <React/RCTBridgeModule.h>

@interface SplashScreen : NSObject <RCTBridgeModule>
#endif

@end
